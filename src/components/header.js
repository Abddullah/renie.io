import React, { useState } from 'react';
import '../css/header.css';
import logo from '../assets/logo.png';
import rafflesButton from '../assets/rafflesButton.png';
import findBinsButton from '../assets/findBinsButton.png';

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div style={{ width: '100%', background: 'gray', }}>
            <div className="headerClass">
                <div className="logo">
                    <div className="image-container">
                        <img src={logo} alt="Logo" className="responsive-img" style={{ minWidth: 80 }} />
                    </div>
                </div>

                <div className='button-container largScreenMargin'>
                    <img src={rafflesButton} alt="Button Image" className="responsive-img" style={{ minWidth: 80, }} />
                    <img src={findBinsButton} alt="Button Image" className="responsive-img" style={{ minWidth: 80, marginLeft: 15, }} />
                </div>

                <div className="menu-btn" onClick={toggleSidebar} style={{ marginRight: 35 }}>
                    ☰
                </div>
            </div>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="close-btn" onClick={toggleSidebar}>
                    ✖
                </div>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;
