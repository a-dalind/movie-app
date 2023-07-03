import styles from './Input.module.scss';
import { FC } from 'react';

const Input: FC = ({
	register,
	options,
	error,
	name,
	className,
	modifiers = [],
	...rest
}) => {
	const mod = {
		wide: false,
	};
	modifiers.forEach(item => {
		mod[item] = true;
	});

	return (
		<div>
			<input
				{...register(name, options)}
				{...rest}
				className={styles.input}
			/>

			{error && <span>{error}</span>}
		</div>
	);
};

export default Input;
