import React, { Component } from 'react';
import '../style.sass';

class UserInput extends Component {
    state = {};
    render() {
        return (
            <div>
                <button className="myBtn">Copy</button>
                <button className="myBtn ml-4">Download</button>
            </div>
        );
    }
}

export default UserInput;
