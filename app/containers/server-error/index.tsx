import { FC } from "react";
import { Heading, Meta } from 'components';

const ServerError:FC = () => {
	return (
		<Meta title={'500 - Server-side error occurred!'}>
			<Heading title={'500 - Server-side error occurred!'} />
		</Meta>
	)
}

export default ServerError;
