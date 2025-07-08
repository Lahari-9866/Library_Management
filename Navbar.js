import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        {/* <BootstrapNavbar.Brand as={Link} to="/">Library System</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Books</Nav.Link>
            <Nav.Link as={Link} to="/add">Add Book</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse> */}
      </Container>
    </BootstrapNavbar>
  );
}
