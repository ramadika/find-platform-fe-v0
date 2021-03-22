// Dependencies
import React from 'react'
import NavBar from 'components/BaseLayout/NavBar'
import Footer from 'components/BaseLayout/Footer'
// Internals

export default function index(props) {
    return (
        <div>
            <NavBar />
                {props.children}
            <Footer />
        </div>
    )
}
