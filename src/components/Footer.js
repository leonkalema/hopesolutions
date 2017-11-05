import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
       <footer className="container-fluid text-center footer">
        <div className="copyrights" style={{marginTop: 25}}>
		
          <p>Hope Solutions © 2017, All Rights Reserved
            <br />
            <span>Design & Developed By: <a href="https://www.leonkalema.com/" target="_blank">Leon Kalema</a></span> </p>
          <p> <br /> </p>
        </div>
      </footer>
    );
  }
}

export default Footer;