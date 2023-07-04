import styles from './Sidebar.module.scss';
import { FC } from 'react';
import Search from '@/components/Search'
import MoviesContainer from '@/components/MoviesContainer'

const Sidebar: FC = () => {

	return (
		<div className={styles.wrapper}>
			<Search />
			<MoviesContainer />
		</div>
	);
};

export default Sidebar;
