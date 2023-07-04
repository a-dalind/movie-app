import styles from './MoviesContainer.module.scss';
import { FC } from 'react';
import { IMovie } from '../../types/movie.types'
import { ImageWrap, LinkWrap, MaterialIcon } from 'components'
import { getGenreUrl, getMovieUrl } from 'config/url.config';
import getGenresList from '../../utils/genre/getGenresList'

const MovieItem: FC<{movie: IMovie}> = ({ movie }) => {
	return (
		<div>
			<LinkWrap href={getMovieUrl(movie.slug)}>
					<ImageWrap src={movie.poster} width={65} height={97} alt={movie.title} />
			</LinkWrap>
			<div>
				<LinkWrap href={getMovieUrl(movie.slug)}>
					<span>{movie.title}</span>
				</LinkWrap>
				<div>
					{movie.genres.map((genre, index) => (
						<LinkWrap
							key={genre._id}
							href={getGenreUrl(genre.slug)}
						>
							{getGenresList(index, movie.genres.length, genre.name)}
						</LinkWrap>
					))}
				</div>
				<div>
					<MaterialIcon name={'MdStarRate'} />
					<span>{movie.rating.toFixed(1)}</span>  {/*напишет 4.3*/}
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
