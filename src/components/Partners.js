import React, { Component } from 'react';
import Slider from 'react-slick';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Partners extends Component {
  render() {
    let k = this.k
	 const settings = {
      dots: false,
      autoplay: true,
	  lazyLoad: true,
      fade: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="container">
		
		
				<div className="row">
				<div className="callout-block text-center fade-in-b">
					<h2>{k("partners_header")}</h2>
					<p> {k("partners_text")} </p>
					
						 </div>
			</div>
						 
						 <Slider {...settings}>
          <div><img src='http://www.drcc.co.in/img/b2.png' /></div>
          <div><img src='http://www.seaskyhk.com/img/02.jpg' /></div>
          <div><img src='http://www.drcc.co.in/img/b2.png' /></div>
          <div><img src='http://www.seaskyhk.com/img/02.jpg' /></div>
        </Slider>

		
      </div>
    );
  }
}

export default Partners;
