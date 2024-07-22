import React, { Component } from 'react';
import './Components.css';

class NavBar extends Component {  
    render() {  
        return (  
            <div className = 'nav-bar'>  
                <div class="ui yellow inverted three item menu">  
                    <a className="item"><b>The best developers under the Sun...</b></a>  
                </div>  
            </div>  
        ); 
    }
}
export { NavBar };