import React, { Component } from 'react';
import '../styles/style.sass';
import '../styles/footer.sass';

class Footer extends Component {
    state = {};
    render() {
        return (
            <div className="footer">
                <a href="https://github.com/phil1436">by Philipp B.</a>
            </div>
        );
    }
}

export default Footer;
