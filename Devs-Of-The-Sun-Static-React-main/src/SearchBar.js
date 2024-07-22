import React, { Component } from 'react';
import './Components.css';
  
    class SearchBar extends Component {  
        render() {
        return (
            <div className='search-bar'>
                <div class="ui category search">
                <div class="ui icon input">
                    <input class="prompt" type="text" placeholder="Search top devs..."></input>
                    <i class="search icon"></i>
                </div>
                <div class="results"></div>
            </div>
            </div>
        );
    }
}
export { SearchBar };