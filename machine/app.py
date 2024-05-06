import cv2
import numpy as np
from ultralytics import YOLO
from ultralytics.utils.plotting import Annotator, colors
from collections import defaultdict

track_history = defaultdict(lambda: [])
model = YOLO("yolov8n.pt")
names = model.model.names

video_path = "testing2.mp4"
cap = cv2.VideoCapture(video_path)
assert cap.isOpened(), "Error reading video file"

w, h, fps = (int(cap.get(x)) for x in (cv2.CAP_PROP_FRAME_WIDTH, cv2.CAP_PROP_FRAME_HEIGHT, cv2.CAP_PROP_FPS))

result = cv2.VideoWriter("v2.testing.mp4",
                       cv2.VideoWriter_fourcc(*'mp4v'),
                       fps,
                       (w, h))

# Define threshold speeds to differentiate between running, slowing, and stopping
threshold_speed_running = 10  # Speed above this threshold is considered running
threshold_speed_stopping = 2   # Speed below this threshold is considered stopping
threshold_speed_slowing = 3    # Speed below this threshold is considered slowing

while cap.isOpened():
    success, frame = cap.read()
    if success:
        results = model.track(frame, persist=True, verbose=False)
        boxes = results[0].boxes.xyxy.cpu()

        if results[0].boxes.id is not None:

            # Extract prediction results
            clss = results[0].boxes.cls.cpu().tolist()
            track_ids = results[0].boxes.id.int().cpu().tolist()
            confs = results[0].boxes.conf.float().cpu().tolist()

            # Annotator Init
            annotator = Annotator(frame, line_width=2)

            for box, cls, track_id in zip(boxes, clss, track_ids):
                # Store tracking history
                track = track_history[track_id]
                track.append((int((box[0] + box[2]) / 2), int((box[1] + box[3]) / 2)))
                if len(track) > 30:
                    track.pop(0)

                # Plot tracks
                points = np.array(track, dtype=np.int32).reshape((-1, 1, 2))
                cv2.circle(frame, (track[-1]), 7, colors(int(cls), True), -1)
                cv2.polylines(frame, [points], isClosed=False, color=colors(int(cls), True), thickness=2)

                # Calculate speed
                speed = 0
                if len(track) > 1:
                    distance = np.linalg.norm(np.array(track[-1]) - np.array(track[-2]))
                    time_interval = 1 / fps  # Time interval between frames
                    speed = distance / time_interval

                # Determine stopping, slowing, or running
                if speed < threshold_speed_stopping:
                    label = "Stopping"
                elif speed < threshold_speed_slowing:
                    label = "Slowing"
                else:
                    label = "Running"

                # Add label to the frame
                cv2.putText(frame, label, (int(box[0]), int(box[1]) - 100), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)

                # Annotate the object
                annotator.box_label(box, color=colors(int(cls), True), label=names[int(cls)])

        result.write(frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        break

result.release()
cap.release()
cv2.destroyAllWindows()
