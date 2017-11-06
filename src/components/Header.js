import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Header extends Component {
  render() {
    let k = this.k

    return (
      <Carousel controls={false} indicators={false} interval={2000} slide={true}>
        <Carousel.Item animateIn={true}>
          <img  alt="Talent Aquisition" src="http://www.seaskyhk.com/img/02.jpg"/>
          <Carousel.Caption>
            <h3>{k("first_slide_label")}</h3>
            <p>{k("first_slide_content")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="logistics" src="http://www.fairtrade.org.uk/~/media/FairtradeUK/Get%20Involved/Images/Banners/Theresa%20May%20Petition%20Web%20Banner.png"/>
          <Carousel.Caption>
            <h3>{k("second_slide_label")}</h3>
            <p>{k("second_slide_content")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" src="http://www.drcc.co.in/img/b2.png"/>
          <Carousel.Caption>
            <h3>{k("third_slide_label")}</h3>
            <p>{k("third_slide_content")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Header;