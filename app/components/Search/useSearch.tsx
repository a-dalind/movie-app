import { useDebounce } from 'hooks/useDebounce';
import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from 'services/movie.service'

const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const {
		isSuccess,
		data
	} = useQuery(['search movie list', debouncedSearch],
		() => MovieService.getMovies(debouncedSearch), {
								select: ({data}) => data,
								enabled: !!debouncedSearch,
							}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return {
		isSuccess,
		data,
		searchTerm,
		handleSearch,
	}
}

export default useSearch
