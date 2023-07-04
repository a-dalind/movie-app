import { useQuery } from 'react-query';
import { GenreService } from 'services/genre.service';
import { IMenuItem } from 'components/Menu/menu.interface';
import { getGenresUrl } from 'config/api.config';

const usePopularGenres = () => {
	const queryData = useQuery(['popular genres'], () =>
		GenreService.getAll(), {
			select: ({data}) => data.map(genre => ({
				icon: genre.icon,
				link: getGenresUrl(genre.slug),
				title: genre.name
			} as IMenuItem)).splice(0, 4),
	})

	return queryData;
}

export default usePopularGenres;
