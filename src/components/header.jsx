import React, { Component } from 'react';
import '../index.css';
import './header.sass';

class Header extends Component {
    state = {};
    render() {
        return (
            <div className="header">
                <div className="logo headerText">README Designer</div>
                <button className="settings mr-6 text-m headerText">
                    Settings
                </button>
            </div>
        );
    }
}

export default Header;
