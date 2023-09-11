import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            Nav - the top-level navigation of the website, sometimes referred to
            as the navbar
            <nav>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/booking">Booking</Link>
                    </li>
                    <li>
                        <Link to="/calltoaction">calltoaction</Link>
                    </li>
                    <li>
                        <Link to="/chicago">chicago</Link>
                    </li>
                    <li>
                        <Link to="/customersay">customersay</Link>
                    </li>
                    <li>
                        <Link to="/specials">specials</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
