import NavBar from "./NavBar";

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default App;
