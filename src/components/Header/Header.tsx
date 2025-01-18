import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header__logo">Proff<span className="header__logo--highlight">You</span></h1>
        </header>
    );
};

export default Header;
