import styles from './SearchField.module.scss';
import { ChangeEvent, FC } from 'react'
import { MaterialIcon } from 'components'

export interface ISearchField {
	searchTerm: string,
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch
}) => {
	return (
		<div>
			<MaterialIcon name={'MdSearch'} />
			<input
				placeholder='Search'
				value={searchTerm}
				onChange={handleSearch}
				/>
		</div>
	);
}

export default SearchField;
