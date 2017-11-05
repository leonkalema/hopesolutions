import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CurrentLanguage, SwitchLanguage } from '../lang/lang'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Menu extends Component {

  render() {
    return (
   <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Hope Solutions</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      
      <Nav pullRight>
		
		<LinkContainer to="/">
    <NavItem eventKey={1}>{this.k("home")}</NavItem>
  </LinkContainer>
		
    
		<LinkContainer to="/about">
    <NavItem eventKey={2}>{this.k("about_us")}</NavItem>
  </LinkContainer>
		
		<LinkContainer to="/contact">
    <NavItem eventKey={3}>{this.k("contact")}</NavItem>
  </LinkContainer>
		
      
		<NavDropdown eventKey={4} title={this.k("language")} id="basic-nav-dropdown">
          <MenuItem eventKey={4.1} active={CurrentLanguage == "fr"} onClick={e => SwitchLanguage("fr")} >{this.k("french")}</MenuItem>
          <MenuItem eventKey={4.2} active={CurrentLanguage == "en"} onClick={e => SwitchLanguage("en")} >{this.k("english")}</MenuItem>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default Menu;