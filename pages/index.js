import Head from 'next/head'
import BlogPosts from '../lib/data.js'
import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1>MY BLOG 😃</h1>
            </main>

            <div>
                {
                    BlogPosts.map((Blog) => {
                        return (<>
                            <div key={Blog.idx}>
                                <Link href={`/blogs/{Blog.idx}`}><a>{Blog.title}</a></Link>
                                <h2>{Blog.date.toString()}</h2>
                                <p>{Blog.content}</p>

                            </div>
                            <br />

                        </>)
                    })
                }
            </div>

        </div>
    )
}
