import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Partners extends Component {
  render() {
    let k = this.k

    return (
      <div className="container">
		
		
				<div className="row">
				<div className="callout-block text-center fade-in-b">
					<h2>{k("partners_header")}</h2>
					<p> {k("partners_text")} </p>
						 
						 <img src="..." className="rounded float-left" alt="..." />
                         <img src="..." className="rounded float-right" alt="..." />

				</div>
			</div>
		
      </div>
    );
  }
}

export default Partners;