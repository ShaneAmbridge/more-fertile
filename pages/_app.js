import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,500;1,600;1,900&family=Roboto:wght@500&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
