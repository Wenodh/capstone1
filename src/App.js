import './App.css';
import BookingPage from './components/BookingPage';
import CallToAction from './components/CallToAction';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import Specials from './components/Specials';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    return (
        <main>
            main
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/calltoaction" element={<CallToAction />}></Route>
                <Route path="/chicago" element={<Chicago />}></Route>
                <Route path="/customersay" element={<CustomersSay />}></Route>
                <Route path="/specials" element={<Specials />}></Route>
            </Routes>
        </main>
    );
}

function Footer() {
    return <footer>footer</footer>;
}

function Header() {
    return (
        <header>
            <img alt="logo" />
            <Nav />
        </header>
    );
}
