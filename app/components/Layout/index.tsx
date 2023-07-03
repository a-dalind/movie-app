import styles from './Layout.module.scss';
import { FC } from 'react';
import { Header, Sidebar, Navigation, Footer } from 'components';

const Layout: FC = ({
	children,
}) => {
	return (
		<div className={styles.wrapper}>
			<Header />

			{children && (
				<div className={styles.mainContent}>
					<Navigation />
					{children}
					<Sidebar />
				</div>
			)}
			 <Footer />
		</div>
	);
};

export default Layout;
