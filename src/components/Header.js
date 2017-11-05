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
      <Carousel controls={false} indicators={false} interval={10000} slide={true}>
        <Carousel.Item animateIn={true}>
          <img  alt="Talent Aquisition" src="https://static.pexels.com/photos/296115/pexels-photo-296115.jpeg"/>
          <Carousel.Caption>
            <h3>{k("first_slide_label")}</h3>
            <p>{k("first_slide_content")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="logistics" src="https://www.exastax.com/wp-content/uploads/2017/04/Logistics.jpg"/>
          <Carousel.Caption>
            <h3>{k("second_slide_label")}</h3>
            <p>{k("second_slide_content")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" src="http://immigrationimpact.com/wp-content/uploads/2014/10/Untitled.png"/>
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