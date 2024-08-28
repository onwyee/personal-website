import React from 'react';
import LogoO from '../../../assets/images/logo-o.png'; // Adjust the path if needed
import './index.scss';

const Logo = () => {
    return (
        <div className="logo-container">
            <img
                className="solid-logo"
                src={LogoO}
                alt="JavaScript, Developer"
            />
        </div>
    );
};

export default Logo;
