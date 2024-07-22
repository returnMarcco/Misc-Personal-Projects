import React, { Component } from 'react'; 
import logo from './images/uther.png';
import "./Images.css";

class MainImage extends Component {
    render() {
        return <div className='uther'>
            <img src = { logo } alt = 'Uther' />
            </div>
    }
}
export { MainImage };