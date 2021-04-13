// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillQuestionCircleFill, BsPlusCircleFill } from 'react-icons/bs'
import { GiFlyingFlag, GiOpenBook } from 'react-icons/gi'
// Internals
import 'components/Help-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="help">
                <div className="container text-center">
                    <h1><BsFillQuestionCircleFill className="mb-2"/> Help Center</h1>
                    <h6>Choose a category to quickly find the help you need</h6>
                    <div className="row mt-5">
                        <NavLink className="col a-help" to="/gstarted">
                            <GiFlyingFlag size={30} className="mb-2"/> 
                            <h5>Getting Started</h5>
                        </NavLink>       
                        <NavLink className="col b-help" to="/">
                            <GiOpenBook size={30} className="mb-2"/>
                            <h5>Usage Guides</h5>
                        </NavLink>
                        <NavLink className="col c-help" to="/">
                            <GiFlyingFlag size={30} className="mb-2"/>
                            <h5>Contact Support</h5>
                        </NavLink> 
                    </div>
                    <h2><span><b>Quick</b></span> Answers</h2>
                    <hr />
                    <NavLink className="d-flex bd-highlight box-help" to="/">
                        <div className="p-2 w-100 bd-highlight">How can i setup my user profile ?</div>
                        <div className="p-2 flex-shrink-1 bd-highlight icon"><BsPlusCircleFill /></div>
                    </NavLink>
                    <NavLink className="d-flex bd-highlight box-help" to="/">
                        <div className="p-2 w-100 bd-highlight">Can i have more than one subcription at a time ?</div>
                        <div className="p-2 flex-shrink-1 bd-highlight"><BsPlusCircleFill /></div>
                    </NavLink>
                    <NavLink className="d-flex bd-highlight box-help" to="/">
                        <div className="p-2 w-100 bd-highlight">Can i cancel my subscription wherever i want ?</div>
                        <div className="p-2 flex-shrink-1 bd-highlight"><BsPlusCircleFill /></div>
                    </NavLink>
                </div>
            </div>
        )
    }
}
