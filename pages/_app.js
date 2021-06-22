import "../styles/globals.css";
import "../styles/bootstrap.scss";
import Head from "next/head"


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Sample App</title>
                <meta name="description" content="A really nice app!"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

