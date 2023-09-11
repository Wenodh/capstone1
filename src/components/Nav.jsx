import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div style={{ width: '100%' }}>
            <nav className="col-10">
                <img
                    src={
                        'https://miro.medium.com/v2/resize:fit:800/1*T2RAqkxxv4cJiveBBmGcfA.png'
                    }
                    alt="Logo"
                    width="40px"
                    height="40px"
                />
                <ul className="nav-bar">
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
                <div className="nav-toggle">
                    {/* <FontAwesomeIcon icon={faBars} size="1x" /> */}
                </div>
            </nav>
        </div>
    );
};

export default Nav;
