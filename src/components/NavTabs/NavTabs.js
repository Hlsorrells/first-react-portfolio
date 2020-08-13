import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Import CSS styles for component
import './NavTabs.css';

// Import Images
import logo from '../../logo_white.svg'; // original brand filename = logo_TeloletOmWebfont55px_320px70px_white

const styles = {
    nav: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%'
    }
}

function NavTabs() {

    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        <Navbar className='navbar' fixed='top'>
            <Navbar.Brand>
                <img src={logo} className='d-inline-block align-top' alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav style={styles.nav}>
                    <Nav.Item >
                        <Link to='/' className={location.pathname === '/' ? ' nav-link active' : ' nav-link'}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/about' className={location.pathname === '/about' ? ' nav-link active' : ' nav-link'}>About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/projects' className={location.pathname === '/projects' ? ' nav-link active' : '  nav-link'}>Projects</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/contact' className={location.pathname === '/contact' ? ' nav-link active' : ' nav-link'}>Contact</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavTabs;
