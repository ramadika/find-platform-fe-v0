// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/io'
import { HiPencilAlt } from 'react-icons/hi'
// Internals
import 'components/Account-Page/index.css'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext;
    render() {
        return (
            <div className="account">
                <div className="container text-center">
                    <h1>Account</h1>
                    <h6>{this.context.timestamp}</h6>
                    <div className="row mt-5">
                        <NavLink className="col a-account" to="/addAccount">
                            <IoIosAddCircle size={30} className="mb-2"/> 
                            <h5>Add Someone</h5>
                        </NavLink>       
                        <NavLink className="col b-account" to="/">
                            <HiPencilAlt size={30} className="mb-2"/>
                            <h5>Update Profile</h5>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
