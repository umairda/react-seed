import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './App.css';

import { ThemeInputGroupWithLabel, ThemePanel } from './components'

class App extends Component {
  render() {
    return (
      <div className="main container">
        <div className="row align-items-center">
          <div className="col-md-6 offset-md-3">
            <ThemePanel>
              <div key="header">Login</div>
              <div key="body">
                <ThemeInputGroupWithLabel inputLabel="username" />
                <ThemeInputGroupWithLabel inputLabel="password" />
                <Button className="login" color="primary">Login</Button>
                <Button color="danger">Sign Up</Button>
              </div>
            </ThemePanel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
