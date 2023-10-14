import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='ps-5 pe-5 pt-3 pb-3'>
                <Navbar.Brand href="#home">YALE DECIDES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="Nomination">Nomination</Nav.Link>
                        <Nav.Link href="leaderboard">leaderboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
}

export default Navigation;

