import React, { Component } from 'react';
import '../index.css';
import '../styles/header.sass';

class Header extends Component {
    state = {};

    render() {
        return (
            <div className="header">
                <div className="logo headerText">README Designer</div>
                <img
                    src="assets/settings.png"
                    alt="settings"
                    className="mr-5 h-10 w-10 opacity-60 hover:opacity-100 cursor-pointer"
                />
            </div>
        );
    }
}

export default Header;
