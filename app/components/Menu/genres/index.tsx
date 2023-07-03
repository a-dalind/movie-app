import styles from './Menu.module.scss';
import { FC } from 'react';
import usePopularGenres from 'components/Menu/genres/usePopularGenres';
import {Menu, SkeletonLoader} from 'components';

const GenreMenu: FC = () => {
	const {isLoading, data} = usePopularGenres();

	return isLoading ? <SkeletonLoader count={5}/> : <Menu menu={{ title: 'Popular genres', items: data || [] }} />
};

export default GenreMenu;
