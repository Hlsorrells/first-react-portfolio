import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// original brand filename = logo_TeloletOmWebfont55px_320px70px_white
import logo from '../../logo_white.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './RBNavbar.css';

const styles = {
    nav: {
        justifyContent: "flex-end",
        flexDirection: "row",
        width: "100%"
    }
}

const RBNavbar = (props) => {
    return (
        <Navbar className="navbar" fixed='top'>
            <Navbar.Brand
                href="#home"
                onClick={() => props.handlePageChange("Home")}
                className="navbar-brand"
            >
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
                        <Nav.Link
                            href="#home"
                            onClick={() => props.handlePageChange("Home")}
                            className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                        >Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#about"
                            onClick={() => props.handlePageChange("About")}
                            className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
                        >About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#projects"
                            onClick={() => props.handlePageChange("Projects")}
                            className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
                        >Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#contact"
                            onClick={() => props.handlePageChange("Contact")}
                            className={props.currentPage === "Contact" ? "navbar-link active" : "navbar-link"}
                        >Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default RBNavbar;
