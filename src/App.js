import React, { Component } from 'react';
import './App.css';
import HeaderPage from './components/HeaderPage';
import { Container } from 'react-bootstrap';
import ContentPage from "./components/ContentPage";

class App extends Component {
  render() {
    return (
      <ContentPage/>
    );
  }
}

export default App;
