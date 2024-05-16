import * as React from 'react';
import { IImage } from '@/interface';
import Image from 'next/image';

export const Img: React.FunctionComponent<IImage> = ({
    src,
    className,
    alt
}) => {
    return (
        <Image 
            src={src}
            alt={alt as string}
            className={className}
        />
    )
}