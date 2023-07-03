import { FC } from "react";
import {IMain} from "./main.interface";
import { Layout, Heading } from 'components';
import Meta from "utils/meta/Meta";

const Main:FC<IMain> = () => {
	return (
		<Meta title={'Watch movies online'} description={'Watch movies and TV shows online'}>
			<Layout>
				<Heading title={'Watch movies online'} />
			</Layout>
		</Meta>
	)
}

export default Main;
