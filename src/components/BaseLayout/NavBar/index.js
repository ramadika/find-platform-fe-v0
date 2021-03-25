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
                <NavLink className="navbar-brand" to="/">Cipta<span>Things</span>.</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav>
                        <NavLink to="/summary">Dashboard</NavLink>
                        <NavLink to="/datalist">Reports</NavLink>
                        <NavLink to="/help">Help</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
