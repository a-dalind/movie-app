import clsx from 'clsx';
import styles from './Button.module.scss';
import { FC } from 'react';

export interface IButton {
	children: React.ReactNode;
	className?: string;
	disabled: boolean;
	onClick: () => void;
	type?: 'button' | 'submit' | 'reset';
	modifiers?: string[];
}

const Button: FC<IButton> = ({
	children,
	className,
	disabled,
	onClick,
	type,
	modifiers = [],
}) => {
	const mod = {
		primary: false,
		link: false,
	};
	modifiers.forEach(item => {
		mod[item] = true;
	});

	return (
		<button
			className={clsx(
				className,
				styles.btn,
				mod.link && styles['btn--link'],
				mod.primary && styles['btn--primary'],
			)}
			onClick={onClick}
			disabled={disabled}
			type={type || 'button'}
		>
			{children}
		</button>
	);
};

export default Button;
