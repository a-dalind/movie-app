import { FC } from "react";
import {IMain} from "./main.interface";
import { Meta, Heading } from 'components';

const Main:FC<IMain> = () => {
	return (
		<Meta title={'Watch movies online'} description={'Watch movies and TV shows online'}>
			<Heading title={'Watch movies online'} />
		</Meta>
	)
}

export default Main;
