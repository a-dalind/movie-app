import styles from './Menu.module.scss';
import { FC } from 'react';
import IMenu, { IMenuItem } from 'components/Menu/menu.interface';
import cn from 'clsx';
import { LinkWrap, MaterialIcon } from 'components';
import { useRouter } from 'next/router';

const MenuItem: FC<{item: IMenuItem}> = ({item}) => {
	const {asPath} = useRouter();

	return (
		<li className={cn({
			[styles.active]: asPath === item.link,
		})}>
			<LinkWrap href={item.link}>
				{/*<MaterialIcon />*/}
				<span>{item.title}</span>
			</LinkWrap>

		</li>
	);
};

const Menu: FC<{menu: IMenu}> = ({menu: { title, items } }) => {

	return (
		<div className={styles.wrapper}>
			<span>{title}</span>
			<ul>
				{items.map(item => (
					<MenuItem
						key={item.link}
						item={item}
					/>
				))}
			</ul>
		</div>
	);
};

// const Menu: FC = () => {
//
// 	return (
// 		<MenuComponent menu={navigationMenu} />
// 	);
// };

export default Menu;
