import styles from './Navigation.module.scss';
import { FC } from 'react';
import { Menu } from 'components';
import { navigationMenu, userMenu } from 'components/Menu/menu.data';
import GenreMenu from 'components/Menu/genres';

const Navigation: FC = () => {

	return (
		<div className={styles.wrapper}>
			<Menu menu={navigationMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />

		</div>
	);
};

export default Navigation;
