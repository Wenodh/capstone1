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
    const availableSlots = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];
    return (
        <main>
            main
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                    path="/booking"
                    element={<BookingPage availableSlots={availableSlots} />}
                ></Route>
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
