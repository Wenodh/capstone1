import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>

  );
}

export default App;
function Main() {
  return <main>
    main
  </main>;
}

function Footer() {
  return <footer>
    footer
  </footer>;
}

function Header() {
  return <header>
    <img alt="logo" />
    <Nav />
  </header>;
}

function Nav() {
  return <nav>
    <ul>
      <li><a href="/home">Homepage</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>;
}

