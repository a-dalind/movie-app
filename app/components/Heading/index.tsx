import { FC } from 'react';
import cn from "clsx";
import styles from './Heading.module.scss';

export interface IHeading {
	title: string,
	className?: string
}
const Heading: FC<IHeading> = ({title, className}) => {

	return (
		<h1 className={cn(styles.heading, className)}>
			{title}
		</h1>
	);
};

export default Heading;
