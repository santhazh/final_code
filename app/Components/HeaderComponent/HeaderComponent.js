import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './HeaderComponent.css';

import mainLogo from'./ostk_profe_logo.png';




const HeaderComponent = () => (
    <header id="HeaderWrap">
    <Navbar className="container-fluid">
      
      <Navbar.Header>
        <Navbar.Brand className="header">
          <a href="#home"><img src={mainLogo} className="mainLogo"/></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav className="headerNav">
        <NavItem eventKey={1} href="#">
          OVERVIEW
        </NavItem>
        <NavItem eventKey={2} href="#">
          BENEFITS
        </NavItem>
        <NavItem eventKey={3} href="#">
          CONTACT US
        </NavItem>
      </Nav>

      
    </Navbar>
    </header>
  );

export default HeaderComponent;