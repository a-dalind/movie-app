import { TypeMaterialIconName } from 'types/icon.types';

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export default interface IMenu {
	title: string
	items: IMenuItem[]
}
