import 'tailwindcss/tailwind.css'
im
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
    return (<>
        <nav>
            <ol>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/About">
                        <a>About</a>
                    </Link>
                </li>
            </ol>
        </nav>                                                                  
        <Component {...pageProps} />

    </>)
}

export default MyApp
