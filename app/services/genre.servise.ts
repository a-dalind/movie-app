import { getGenresUrl } from 'config/api.config';
import { IGenre } from 'types/movie.types';
import { axiousDefault } from 'api/interceptors';

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiousDefault.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm
					}
				: {},
		})
	}
}
