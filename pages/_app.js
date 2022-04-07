import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import LayoutMain from "../components/Layout/layout";
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
					href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
