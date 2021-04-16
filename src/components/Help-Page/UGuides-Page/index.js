// Dependencies
import React, { Component } from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdDevices } from 'react-icons/md'
import { FaSwatchbook } from 'react-icons/fa'
import { AiFillRightCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
// Internals
import 'components/Help-Page/UGuides-Page/index.css'
import img1 from 'assets/Cipta_Things-removebg.png'

export default class index extends Component {
    render() {
        return (
            <div className="uguides">
                <div className="container">
                    <h6 className="text-center"><img src={img1} alt="img"></img><b>Cipta</b>Things.</h6>
                    <h1 className="text-center">Usage Guides</h1>
                    <h5 className="text-center">Welcome! We're here to help you get things rolling.</h5>
                    <div className="row mb-5">
                        <div className="col">
                            <div className="row step-uguides step1-guides">
                                <CgProfile style={{marginTop:'10px', marginRight:'30px'}} size={20}/>
                                <h3>
                                    <span>
                                        Complete your profile
                                    </span>
                                    <span style={{fontSize:'8pt', marginTop:'10px', color:'#dcdde1'}}>
                                        Configure your contact details and notification preferences
                                    </span>
                                </h3>
                                <NavLink to="/updateAccount" className="ml-auto"><AiFillRightCircle size={30}/></NavLink>
                            </div>
                            <div className="row step-uguides">
                                <FaSwatchbook style={{marginTop:'10px', marginRight:'30px'}} size={20}/>
                                <h3>
                                    <span>
                                        Activate your device
                                    </span>
                                    <span style={{fontSize:'8pt', marginTop:'10px', color:'#dcdde1'}}>
                                        Turn on your device so that later people can see your location
                                    </span>
                                </h3>
                            </div>
                            <div className="row step-uguides step2-guides">
                                <MdDevices style={{marginTop:'10px', marginRight:'30px'}} size={20}/>
                                <h3>
                                    <span>
                                        Try accessing the app
                                    </span>
                                    <span style={{fontSize:'8pt', marginTop:'10px', color:'#dcdde1'}}>
                                        Register first and you'll get a free month 
                                    </span>
                                </h3>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/" className="ml-auto"><AiFillRightCircle size={30}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
