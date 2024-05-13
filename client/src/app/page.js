import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import CameraPage from "@/pages/CameraPage";

export default function Home() {
  return (
   <NextUIProvider>
    <CameraPage />
   </NextUIProvider>
  );
}
