import Head from "next/head";
import { getPost, getSlugs } from '../../lib/posts';


export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false;
  }
  return {
    paths: [
      { params: { slug: 'first-post' }},
      { params: { slug: 'second-post' }},
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  console.log('[PostPage] getStaticProps()', slug);
  // const data = await readFile('contents/post/first post.json', 'utf');
  const post = await getPost('slug');
    return {
        props: { post },
    };
}

function PostPage({post}) {
  return (
    <>
    <Head>
        <title>{post.title} - My Blog</title>
    </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title} - First Post</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
