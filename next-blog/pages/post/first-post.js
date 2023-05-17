import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
    return {
        props: {
            post: {
                title: 'First Post',
                body: 'My first post, as static props',
            },
        },
    };
}

function FirstPage() {
  return (
    <>
    <head>
        <title>My Blog</title>
    </head>
      <main>
        <h1>First Post</h1>

      </main>
    </>
  );
}

export default FirstPage;
