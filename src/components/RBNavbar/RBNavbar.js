import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// original brand filename = logo_TeloletOmWebfont55px_320px70px_white
import logo from '../../logo_white.svg'
import './RBNavbar.css';

const styles = {
    nav: {
        justifyContent: "flex-end",
        flexDirection: "row",
        width: "100%"
    }
}

const RBNavbar = () => {
    return (
        <Navbar className="navbar" fixed='top'>
            <Navbar.Brand href="#home" className="navbar-brand">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={styles.nav}>
                    <Nav.Item >
                        <Nav.Link href="#home" className='navbar-link'>Home</Nav.Link>
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
