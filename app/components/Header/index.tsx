import styles from './Header.module.scss';
import { FC } from 'react';
import { Logo } from 'components';

const Header: FC = () => {

	return (
		<header className={styles.wrapper}>
			<Logo />
			Header
		</header>
	);
};

export default Header;
