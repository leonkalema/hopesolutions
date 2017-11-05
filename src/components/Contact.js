import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <PageHeader>Reach Us: <small>Why not talk to us</small></PageHeader>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="well">
                <h3 style={{lineHeight: '20%'}}><i className="fa fa-home fa-1x" style={{lineHeight: '6%', color: '#339966'}} /> Locations:</h3>
		       
		        <p style={{marginTop: '6%', lineHeight: '35%'}}>Kampala Office</p>            
                <p style={{marginTop: '6%', lineHeight: '35%'}}>Goma Office</p>
                <br />
                <br />
                <h3 style={{lineHeight: '20%'}}><i className="fa fa-envelope fa-1x" style={{lineHeight: '6%', color: '#339966'}} /> General Inquiries:</h3>
                <p style={{marginTop: '6%', lineHeight: '35%'}}>boad@hope-solutions.org</p>
                <br />
                <br />
                <h3 style={{lineHeight: '20%'}}><i className="fa fa-user fa-1x" style={{lineHeight: '6%', color: '#339966'}} /> Job Inquiries:</h3>
                <p style={{marginTop: '6%', lineHeight: '35%'}}>jobs@hope-solutions.org</p>
                <br />
                <br />
                <h3 style={{lineHeight: '20%'}}><i className="fa fa-yelp fa-1x" style={{lineHeight: '6%', color: '#339966'}} /> Follow Us:</h3>
                <p style={{marginTop: '6%', lineHeight: '35%'}}><a href="linkedin.com/hopesolutions">linkedin.com/hopesolutions</a></p>
              </div>
            </div>
            <div className="col-sm-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63810.02567047632!2d29.25262916106833!3d-1.6685535035069976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x615972db90dc667c!2sRond+Point+Chuduku!5e0!3m2!1sen!2suk!4v1503321881181" width={565} height={430} frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;