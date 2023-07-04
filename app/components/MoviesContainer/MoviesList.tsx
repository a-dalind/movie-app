import styles from './MoviesContainer.module.scss';
import { FC } from 'react';
import { IMovie } from 'types/movie.types'
import { LinkWrap } from 'components'
import MovieItem from './MovieItem';

export interface IMovieList {
	title: string,
	link: string,
	movies: IMovie[]
}

const MoviesList: FC<{list: IMovieList}> = ({
	list: { link, movies, title },
}) => {

	return (
		<div>
			<span>{title}</span>
			<ul>
				{movies.map(movie => <MovieItem key={movie._id} movie={movie} />)}
			</ul>
			<LinkWrap href={link}>See more</LinkWrap>
		</div>
	);
};

export default MoviesList;
