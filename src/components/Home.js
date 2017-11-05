import React, { Component } from 'react';
import Header from './Header';
import Services from './Services';
import Partners from './Partners';
import button from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>	
        <Header />
        <Services />
        <br />
		<Partners />
      </div>	
    );
  }
}

export default Home;