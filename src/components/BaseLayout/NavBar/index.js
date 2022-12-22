// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
// internals
import 'components/BaseLayout/NavBar/index.css'

export default function index() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink className="d-flex justify-content-start align-self-center navbar-brand" to="/home">Cipta<span>Things</span>.</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/reports">Reports</NavLink>
                        {/* <NavLink to="/help">Help</NavLink>
                        <NavLink to="/account">Account</NavLink> */}
                    </Nav>
                    <NavLink className="ml-auto navbar-out" to="/">Sign out</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
