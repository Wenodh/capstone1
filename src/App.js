import { useReducer, useState } from 'react';
import './App.css';
import BookingPage from './components/BookingPage';
import CallToAction from './components/CallToAction';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import Specials from './components/Specials';

import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Link,
} from 'react-router-dom';
import { fetchAPI, submitAPI } from './api';
import ConfirmedBooking from './components/ConfirmedBooking';

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
    const timesReducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE': {
                return action.newTimes;
            }
            case 'INITIALIZE': {
                return action.initialTimes;
            }
            default: {
                return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
            }
        }
    };

    const initialData = {
        date: '',
        time: '',
        guests: '',
        occasion: 'Default',
    };
    const [bookingData, setBookingData] = useState(initialData);
    const [availableTimes, dispatch] = useReducer(timesReducer, []);
    const navigate = useNavigate();

    const initializeTimes = () => {
        dispatch({
            type: 'INITIALIZE',
            initialTimes: [],
        });
    };

    const updateTimes = (date) => {
        const result = fetchAPI(date);
        dispatch({
            type: 'UPDATE',
            newTimes: result,
        });
    };

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/confirm');
        }
    };
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            initializeTimes={initializeTimes}
                            updateTimes={updateTimes}
                            bookingData={bookingData}
                            setBookingData={setBookingData}
                            submitForm={submitForm}
                        />
                    }
                ></Route>
                <Route path="/calltoaction" element={<CallToAction />}></Route>
                <Route path="/chicago" element={<Chicago />}></Route>
                <Route path="/customersay" element={<CustomersSay />}></Route>
                <Route path="/specials" element={<Specials />}></Route>
                <Route
                    path="/confirm"
                    element={<ConfirmedBooking bookingData={bookingData} />}
                />
            </Routes>
        </main>
    );
}

function Footer() {
    return (
        <div className="row fillGreen">
            <div className="col-2"></div>
            <footer className="col-8">
                <div className="doormat">
                    <img
                        src={
                            'https://th.bing.com/th/id/OIP.e2klyJTXjZidyYcUN42fHwHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7'
                        }
                        alt="Restaurant image"
                    />
                    <ul className="p-text">
                        <li className="card-title-text">Navigation</li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/booking">Reservation</Link>
                        </li>
                        <li>
                            <Link to="/">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="contacts">
                    <ul className="p-text">
                        <li className="card-title-text">Contacts</li>
                        <li>XXXXXXXXX, HYD</li>
                        <li>+91 0987654321</li>
                        <li>littlelemon@dummymail.com</li>
                    </ul>
                </div>
                <div className="social">
                    <ul className="p-text">
                        <li className="card-title-text">Social</li>
                        <li>
                            <a href="www.facebook.com">Facebook</a>
                        </li>
                        <li>
                            <a href="www.instagram.com">Instagram</a>
                        </li>
                        <li>
                            <a href="twitter.com">Twitter</a>
                        </li>
                        <li>
                            <a href="www.youtube.com/">YouTube</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="col-2"></div>
        </div>
    );
}

function Header() {
    return (
        <header>
            <Nav />
        </header>
    );
}
