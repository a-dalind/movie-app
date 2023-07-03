import clsx from 'clsx';
import styles from './LinkWrap.module.scss';
import { FC } from 'react';
import Link from 'next/link';

export interface ILinkWrap {

	children: React.ReactNode;
	className?: string,
	href: string,
	alt?: string,
	modifiers?: string[];
}

const LinkWrap: FC<ILinkWrap> = ({
	children,
	className,
	href,
	alt,
	modifiers = [],
}) => {
	const mod = {
		primary: false,
	};

	modifiers.forEach((item) => {
		mod[item] = true;
	});

	return (
		<div
			className={clsx(
				styles.link,
				mod.primary && styles['link--primary'],
				className,
			)}
		>
			<Link href={href} alt={alt}>
				{children}
			</Link>
		</div>
	);
}

export default LinkWrap;
