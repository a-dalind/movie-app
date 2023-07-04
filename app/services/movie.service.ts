import { getMoviesUrl } from 'config/api.config'
import { IMovie } from 'types/movie.types'
import { axiousDefault } from 'api/interceptors';

export const MovieService = {
	async getMovies(searchTerm?: string) {
		return axiousDefault.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm
					}
				: {},
		})
	},

	async getPopularMovies() {
		const { data: movies } = await axiousDefault.get<IMovie[]>(
			getMoviesUrl('/most-popular'),)
		return movies;
	}
}
