// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     1.xx
import React, { Component } from 'react';
import './App.css';
import Word from './components/Word';
import Country from './components/Country';


class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <Country />
      </div>
     );
  }
}
 
export default App;