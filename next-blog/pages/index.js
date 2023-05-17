import Link from "next/link";

function HomePage() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;