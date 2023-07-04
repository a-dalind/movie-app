import styles from './Search.module.scss';
import { FC } from 'react';
import { SearchList } from './SearchList'
import useSearch from '@/components/Search/useSearch'
import {SearchField} from 'components'

const Search: FC = () => {
	const {isSuccess, data, searchTerm, handleSearch} = useSearch();

	return (
		<div>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			{isSuccess && <SearchList movies={data || []} />}

		</div>
	);
};

export default Search;
