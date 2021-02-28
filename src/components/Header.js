import React from 'react';
import header from '../images/header.jpg';
import "../css/App.css";

const Header = () => {
    return (
        <header className="grid grid-col-1-200px">
            <img src={header} alt="header" width = '1490px' height="200px"/>
        </header>
    )
}

export default Header
