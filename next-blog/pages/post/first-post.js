import Head from "next/head";
import Link from "next/link";


export async function getStaticProps() {
  console.log('[FirstPage] getStaticProps()')
  // const data = await redFile('contents/post/first post.json', 'utf');
  const post = await getPost('first-post')
    return {
        props: {
            post
        },
    };
}

function FirstPage({post}) {
  return (
    <>
    <head>
        <title>{post.title} - My Blog</title>
    </head>
      <main>
        <p>{date}</p>
        <h1>{post.title} - First Post</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPage;
