import { FC } from 'react';
import cn from "clsx";
import styles from './SkeletonLoader.module.scss';
import Skeleton, {SkeletonProps} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

// export interface ISkeleton {
// 	modifiers?: string[];
// }

const SkeletonLoader: FC<SkeletonProps> = ({className, modifiers = [], ...props}) => {

	// const mod = {
	// 	string: false,
	// 	sidebarFilmBlock: false,
	// };
	// modifiers.forEach(item => {
	// 	mod[item] = true;
	// });

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
