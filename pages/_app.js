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
					href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>

				<script
					src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
					integrity='sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=='
					referrerPolicy='no-referrer'
					crossOrigin='true'
				></script>
			</Head>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
