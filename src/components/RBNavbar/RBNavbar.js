import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './RBNavbar.css';

const RBNavbar = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="#home" className="navbar-brand">
                {/* <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Item >
                        <Nav.Link href="/home" className='navbar-link'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/about" className='navbar-link'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/projects" className='navbar-link'>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/contact" className='navbar-link'>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default RBNavbar;
