import './App.css';
import React from 'react';
import Root from './Root.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


  render() {
      return (
          <Root />
      );
  }

}

export default App;
