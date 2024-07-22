import React, { Component } from 'react';
import './Components.css';

class DevHeader extends Component {
    render() {
        return (
            <h1 className="dev-header">Our <span className="universal">Universal</span> Curation</h1>
        );
    }
}

export { DevHeader };