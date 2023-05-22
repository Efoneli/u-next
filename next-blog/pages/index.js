import Head from "next/head";
import Link from "next/link";
import { getPosts } from '..//lib/posts'

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomePage({ posts}) {
  return (
    <>
    <head>
        <title>My Blog</title>
    </head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
             <li>
             <Link href={`/post/${post.slug}`}>
                 {post.title}
             </Link>
         </li>
          ))}

           
        </ul>
      </main>
    </>
  );
}

export default HomePage;
