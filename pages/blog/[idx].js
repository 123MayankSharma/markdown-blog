import React from 'react'
import Head from 'next/head'
import BlogPosts from '../../lib/data.js'
function BlogPage({ title, date, content }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href='/favicon.ico' />
            </Head>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <p>{content}</p>
        </div>
    )
}




export async function getStaticProps({ context }) {
    const { params } = context;

    return {
        props: BlogPosts.find((item) => {
            item.idx == params.idx
        })
    }

}

export async function getStaticPaths() {
    return {
        paths: BlogPosts.map((blog) => {
            params: {
                idx: blog.idx
            }

        }),
        fallback: false
    };
}


export default BlogPage

