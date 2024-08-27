import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoO from '../../assets/images/logo-o.png';
import LogoSubtitle from '../../assets/images/O9DesignWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBars, faSuitcase, faClose } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {useState} from "react";

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoO} alt="logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="O9Design"/>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#4d4d4e"
                    size="3x"
                    className="close-icon"
                />
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/owen-nyenhuis-8023292b6/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/onwyee"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/owennyenhuis/?next=%2F"
                    >
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>

            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className="hamburger-icon"/>
        </div>
    );
}


export default Sidebar