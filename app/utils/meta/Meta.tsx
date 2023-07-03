import Head from "next/head";
import {useRouter} from "next/router";
import { ISeo } from "./meta.interface";
import {siteName, titleCombination} from "config/seo.config";
import {clearText} from "../string/clearText";
import { FC } from "react";
import logoImage from '/public/logo.jpg';

const Meta:FC<ISeo> = ({title, description, image, children}) => {
	const {asPath} = useRouter();
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleCombination(title)}</title>
				{description
					? (
						<>
							<meta
								itemProp='description'
								name='description'
								content={clearText(description, 152)}
							/>
							<link rel='canonical' href={currentUrl} />
							<meta property='og:locale' content='en' />
							<meta property='og:title' content={titleCombination(title)} />
							<meta property='og:url' content={currentUrl} />
							<meta property='og:image' content={image || logoImage} />
							<meta property='og:site_name' content={siteName} />
							<meta
								property='og:description'
								content={clearText(description, 197)}
							/>
						</>
					)
					: <meta name='robots' content='noindex, nofollow'/> }

					</Head>
			{children}

		</>
	)
}

export default Meta;
