import 'tailwindcss/tailwind.css'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
    return (<>
        <nav>
            <ul>
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
            </ul>
        </nav>
        <Component {...pageProps} />

    </>)
}

export default MyApp
