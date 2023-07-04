import { FC } from "react";
import { Heading, Meta } from 'components';

const NotFound:FC = () => {
	return (
		<Meta title={'Page not found!'}>
			<Heading title={'Page not found!'} />
		</Meta>
	)
}

export default NotFound;
