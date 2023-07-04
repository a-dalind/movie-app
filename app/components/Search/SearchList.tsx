import { ImageWrap, LinkWrap } from 'components'
import { getMovieUrl } from 'config/url.config';
import { FC } from 'react';
import { IMovie } from 'types/movie.types';

export const SearchList: FC<{movies: IMovie[]}> = ({movies}) => {
	return (
		<div>
			{movies.length
			? movies.map((movie) => (
					<LinkWrap href={`/movie/${movie.slug}`}>
						<div>
							<ImageWrap
								src={movie.poster}
								width={50}
								height={80}
								alt={movie.title}
							/>
							<span>{movie.title}</span>
						</div>
					</LinkWrap>
				))
				: <div>Movies not found</div>
			}
		</div>
	)
};
