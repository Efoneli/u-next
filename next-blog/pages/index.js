import NavBar from "./NavBar";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <>
    <head>
        <title>My Blog</title>
    </head>
      <main>
        <h1>My Blog</h1>
        <ul>
            <li>
                <Link href='/post/first-post'>
                    first
                </Link>
            </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
