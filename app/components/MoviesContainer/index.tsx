import styles from './MoviesContainer.module.scss';
import { FC } from 'react';
import PopularMovies from '@/components/MoviesContainer/PopularMovies'
import FavoriteMovies from '@/components/MoviesContainer/FavoriteMovies/FavoriteMovies'

const MoviesContainer: FC = () => {

	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	);
};

export default MoviesContainer;
