import React, { Component } from 'react'
import Link from 'next/link'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import auth0 from '../../services/auth0'

const BsNavLink = ({ route, title }) => (
  <NavItem className="port-navbar-item">
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  </NavItem>
)

const Login = () => (
  <span
    className="nav-link port-navbar-link clickable"
    onClick={auth0.login}
  >
    Login
  </span>
)

const Logout = () => (
  <span
    className="nav-link port-navbar-link clickable"
    onClick={auth0.logout}
  >
    Logout
  </span>
)

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isAuthenticated } = this.props

    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" light expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Filip Jerga</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <BsNavLink route="/" title={"Home"} />
              <BsNavLink route="/about" title={"About"} />
              <BsNavLink route="/portfolios" title={"Portfolio"} />
              <BsNavLink route="/blogs" title={"Blog"} />
              <BsNavLink route="/cv" title={"CV"} />
              <NavItem>
                {!isAuthenticated ? <Login /> : <Logout />}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    )
  }
}

export default Header