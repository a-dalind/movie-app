import styles from './Logo.module.scss';
import { FC } from 'react';
import { ImageWrap, LinkWrap } from 'components';

const Logo: FC = () => {

	return (
		<LinkWrap href={'/'} className={styles.wrapper}>
			<ImageWrap src={'/../public/logo.jpg'} alt={'Logo'} width={80} height={80} />
		</LinkWrap>
	);
};

export default Logo;
