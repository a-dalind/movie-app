import cn from 'clsx';
import styles from './ImageWrap.module.scss';
import { FC } from 'react';
import Image from 'next/image';

export interface IImageWrap {
	className?: string,
	src: string,
	width: number,
	height: number,
	alt: string,
}

const ImageWrap: FC<IImageWrap> = ({
	className,
	src,
	width,
	height,
	alt,
}) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<Image src={src} alt={alt} width={width} height={height} draggable={false}/>
		</div>
	);
}

export default ImageWrap;
