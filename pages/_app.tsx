import MainProvider from 'providers/MainProvider';
const MyApp = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
