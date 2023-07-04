import styles from './MoviesContainer.module.scss';
import { FC } from 'react';
import { useQuery } from 'react-query'
import { MovieService } from 'services/movie.service'
import { SkeletonLoader } from 'components'
import MoviesList from './MoviesList'

const PopularMovies: FC = () => {
	const {isLoading, data} = useQuery(['popular movies in sidebar'],
		() => MovieService.getPopularMovies()
	)

	console.log(data, '123123')

	return (
		<div>
			{isLoading
				? <SkeletonLoader count={3}/>
				: <MoviesList
						list={{
							link: '/trending',
							movies: data || [],
							title: 'Popular movies',
						}}
					/>
				}
		</div>
	);
};

export default PopularMovies;
