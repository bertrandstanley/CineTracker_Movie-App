import '../styles/header.css';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
    const [loginCheck, setLoginCheck] = useState(false);
    useEffect(() => {
        setLoginCheck(Auth.loggedIn());
    }, []);

    const currentPage = useLocation().pathname;

    if (!loginCheck) {
        return null;
    }

    return (
        <header className="d-flex justify-content-center py-3 mb-4 header-bar">
            <a href="/Movies" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">
                    <img src="/LightThemeLogo.png" alt="Logo" className="logo" />
                    <strong className='web-theme-text'>CineTracker</strong>
                </span>
            </a>

            <ul className="nav nav-pills custom-nav header-bar">
                {/* Link to Movies Page */}
                <li className="nav-item">
                    <Link to="/Movies" className={currentPage === "/Movies" ? "nav-link active" : "nav-link"}>Movies</Link>
                </li>
                {/* Link to TV Shows Page */}
                <li className="nav-item">
                    <Link to="/TVShows" className={currentPage === "/TVShows" ? "nav-link active" : "nav-link"}>TV Shows</Link>
                </li>
                {/* Link to Library Page */}
                <li className="nav-item">
                    <Link to="/Library" className={currentPage === "/Library" ? "nav-link active" : "nav-link"}>Library</Link>
                </li>
                {/* Link to Contact Us Page */}
                <li className="nav-item">
                    <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>Contact Us</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;

