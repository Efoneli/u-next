import Head from "next/head";
import { getPost } from '../../lib/posts';


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'first-post' }},
      { params: { slug: 'second-post' }},
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log('[PostPage] getStaticProps()');
  // const data = await readFile('contents/post/first post.json', 'utf');
  const post = await getPost('slug');
    return {
        props: { post },
    };
}

function FirstPage({post}) {
  return (
    <>
    <Head>
        <title>{post.title} - My Blog</title>
    </Head>
      <main>
        <p>{date}</p>
        <h1>{post.title} - First Post</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPage;
