import './App.css';
import React from 'react';
import { NavBar } from './NavBar';
import { Component } from 'react';
import { SearchBar } from './SearchBar';
import { MainImage } from './MainImage';
import { DevHeader } from './DevHeader';
import CardContainer from './CardContainer';
import { Footer } from './Footer';
import MailingListForm from './MailingListForm';

class App extends Component{
    render() {
      return (
      <div className="App">  
        <NavBar></NavBar>
        <SearchBar></SearchBar>
        <MainImage></MainImage>
        <DevHeader></DevHeader>
        <CardContainer></CardContainer>
        <Footer></Footer>
        <MailingListForm></MailingListForm>
      </div>  
    );  
  }
}

export default App;
