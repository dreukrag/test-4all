import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseCard from './components/BaseCard'
import { Grid} from '@material-ui/core/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Grid container spacing={24} style={{width:'100%', margin:'0px'}}>
          <Grid item xs='12' sm='12' md='6' lg='3' xl='3' children={< BaseCard  title="teste" subtitle="testado" color='red' />} />
          <Grid item xs='12' sm='12' md='6' lg='3' xl='3' children={< BaseCard  title="teste" subtitle="testado" color='red' />} />
          <Grid item xs='12' sm='12' md='6' lg='3' xl='3' children={< BaseCard  title="teste" subtitle="testado" color='red' />} />
          <Grid item xs='12' sm='12' md='6' lg='3' xl='3' children={< BaseCard  title="teste" subtitle="testado" color='red' />} />
        </Grid>
      </div>
    );
  }
}

export default App;
