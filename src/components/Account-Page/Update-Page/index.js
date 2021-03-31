// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Account-Page/Update-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="update">
                <div className="container">
                    <h1>Update Profile</h1>
                    <h6>Update your profile</h6>
                    <hr />
                    <div className="row justify-content-center">
                        <form onSubmit={this.postData}>
                            <h3 className="text-center"><b>Device ID <span style={{color:'red'}}>*</span></b></h3>
                            <h4 className="text-center">Scan Device to get the ID</h4>
                            <input type="text" name="address" ref={(val) => this.address = val} className="text-center form-control" style={{width:'220px',marginLeft:'auto',marginRight:'auto'}}></input>
                            <div className="row justify-content-center mt-3">
                                <div className="col">
                                    <h3><b>Display Name <span style={{color:'red'}}>*</span></b></h3>
                                    <h4>How do you want to be called?</h4>
                                    <input type="text" name="nickName" ref={(val) => this.nickName = val} className="form-control" required></input>
                                </div>
                                <div className="col">
                                    <h3><b>Full Name <span style={{color:'red'}}>*</span></b></h3>
                                    <h4>Visible to other members</h4>
                                    <input type="text" name="fullName" ref={(val) => this.fullName = val} className="form-control" required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 w-100 bd-highlight">
                                        <h3>Delete ID</h3>
                                        <h4>By deleting your device ID you have to scan the device again to get the ID</h4>
                                    </div>
                                    <div className="p-2 flex-shrink-1 bd-highlight">
                                        <h4><b>Delete account..</b></h4>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Submit"  className="form-control mt-5"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
