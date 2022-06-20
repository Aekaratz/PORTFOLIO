import React from 'react'
import {Navbar,Nav,Col,Button,Row,Container,NavDropdown,Collapse} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbars() {
  return (

   <Navbar bg='dark' variant='dark'sticky='top' expand="md" >
     <Container>
       <Navbar.Brand  href='Home'>

         AEKARATSHOP

       </Navbar.Brand>

       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="Home">Home</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/pagehome">Register</Nav.Link>
          <Nav.Link href="#">Login</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
     </Container>

   </Navbar>
    
    
  )
}
