import '../styles/globals.css'
import { Header } from "../components/Header/Header"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp
