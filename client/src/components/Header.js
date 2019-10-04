import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
    const [darkMode, setDarkMode ] = useDarkMode();

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    return (
        <nav className='header'>
            <h1>Womens World Cup Player Roster</h1>
            <div className='dark-mode__toggle'>
                <div 
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>

        </nav>
    )
}

export default Header;