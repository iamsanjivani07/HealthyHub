import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react"

function CollapsibleExample() {
  const [active, setActive] = useState('navbar')
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    //function to toggle navBar
    const showNav = () => {
        setActive('navbar activeNavbar')
    }

    const removeNav = () => {
        setActive('navbar')
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Healthy-Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Features" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/Activities" className="navLink">Activities</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/Activities" className="navLink">Health Sign</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/Activities" className="navLink">Status Data</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Subscription</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Doctor on call/consultation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Health Insurance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Ambulance supporte</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Medicine 24/7</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">HealthyBlog</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <li className="navItem">
                            {isAuthenticated && <a href="/ProfilePage" className="navLink" >{user.name}</a>}
                            </li>

                        {
                            isAuthenticated ? (
                                <li className="navItem">
                                    <button className="navLink" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                                </li>
                            ) : (
                                <li>
                                    <button className="btn" onClick={() => loginWithRedirect()}><a href="#">Login</a></button>
                
                                </li>                            
                            )}  
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;