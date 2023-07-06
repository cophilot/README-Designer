import React, { Component } from 'react';
import '../styles/style.sass';
import { convertREADME } from '../converter';
import LocalStorageService from '../services/LocalStorageService';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            realName: '',
            repository: '',
        };
        const username = LocalStorageService.get('username');
        const realName = LocalStorageService.get('realName');
        if (username) {
            this.state.username = username;
        }
        if (realName) {
            this.state.realName = realName;
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
        if (name === 'username' || name === 'realName') {
            LocalStorageService.set(name, value);
        }
    };

    downloadFile = () => {
        const content = convertREADME(
            this.state.username,
            this.state.realName,
            this.state.repository
        );
        const element = document.createElement('a');
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'README.md';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    render() {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                    <label className="">GitHub username:</label>
                    <input
                        name="username"
                        type="text"
                        className="myInput"
                        placeholder="GitHub username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="flex flex-row justify-between">
                    <label className="">Real name:</label>
                    <input
                        name="realName"
                        type="text"
                        className="myInput"
                        placeholder="Real Name"
                        value={this.state.realName}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="flex flex-row justify-between">
                    <label className="">Repository :</label>
                    <input
                        name="repository"
                        type="text"
                        className="myInput ml-2"
                        placeholder="Repository"
                        value={this.state.repository}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <button className="myBtn">Copy</button>
                    <button className="myBtn ml-4" onClick={this.downloadFile}>
                        Download
                    </button>
                </div>
            </div>
        );
    }
}

export default UserInput;
