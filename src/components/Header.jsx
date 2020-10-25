import React from 'react';
import logo from '../logo.svg';
import '../index.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links">Content</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu__links">Profile</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}


export default Header;