import React from 'react';
import './Navbar.css';

// An alert component that displays a warning message
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Logo" className="logo-image" />
                <span className="logo-text">Design System</span>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/components">Components</a></li>
                <li><a href="/docs">Documentation</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}