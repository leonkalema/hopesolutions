import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Services extends Component {
  render() {
    let k = this.k

    return (
      <div className="container">
		
		
				<div className="row">
				<div className="callout-block text-center fade-in-b">
					<h2>{k("about_intro")}</h2>
					<p> {k("about_intro_content")} </p>
		
		

				</div>
			</div>
		
        <div className="row">
          <h2 className="text-center">{k("services_blocks")}</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="box">
                <div className="box-content">
                  <h3 className="tag-title">{k("what_we_do_title")}</h3>
                  <hr />
                  <p>{k("what_we_do_content")}</p>
                  <br />
                  <a href="#" className="btn btn-block btn-primary">{k("learn_more")}</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="box">
                <div className="box-content">
                  <h3 className="tag-title">{k("about_us_title")}</h3>
                  <hr />
                  <p>{k("about_us_content")}</p>
                  <br />
                  <a href="#" className="btn btn-block btn-primary">{k("learn_more")}</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="box">
                <div className="box-content">
                  <h3 className="tag-title">{k("jobs_career_title")}</h3>
                  <hr />
                  <p>{k("jobs_career_content")}</p>
                  <br />
                  <a href="#" className="btn btn-block btn-primary">{k("learn_more")}</a>
                </div>
              </div>
            </div>
          </div>           
        </div>
      </div>
    );
  }
}

export default Services;