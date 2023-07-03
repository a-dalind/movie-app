import { FC } from 'react';
import cn from "clsx";
import styles from './SkeletonLoader.module.scss';
import Skeleton, {SkeletonProps} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({className, ...props}) => {

	return (
		<Skeleton
			{...props}
			baseColor='lightgrey'
			highlightColor='lightcoral'
      className={cn(styles.skeleton, className)}
		/>
	);
};

export default SkeletonLoader;
