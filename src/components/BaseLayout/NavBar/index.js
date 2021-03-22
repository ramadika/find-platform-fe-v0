// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
// internals
import 'components/BaseLayout/NavBar/index.css'

export default function index() {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav>
                        <NavLink to="/summary">Summary</NavLink>
                    </Nav>
                    <NavLink className="navbar-brand" to="/">Cipta<span>Things</span>.</NavLink>
                    <Nav>
                        <NavLink to="/datalist">List of Data</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
