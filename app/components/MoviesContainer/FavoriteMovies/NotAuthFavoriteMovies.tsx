import styles from './MoviesContainer.module.scss';
import { FC } from 'react';


const NotAuthFavoriteMovies: FC = () => {
	return (
		<div>To view this block please authorize!</div>
	);
};

export default NotAuthFavoriteMovies;
