// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from "sweetalert";
// Internals
import 'components/Account-Page/Add-Page/index.css'

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        swal({
          title: "Are you sure?",
          text: "Once submitted, you will not be able to change your data!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                Axios.post("http://localhost/receiveESP/create.php", {
                    nickName: this.nickName.value,
                    fullName: this.fullName.value,
                    address: this.address.value,
                })
                .then(function({data}) {
                    if(data.success === 1){
                        this.setState({
                            count: 1
                        });
                        event.target.reset();
                        // alert(data.message);
                        swal(data.message, {
                            icon: "success",
                        });
                    }
                    else {
                        // alert(data.message);
                        swal(data.message, {
                          icon: "error",
                        });
                    }
                }.bind(this)) 
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                swal("Change your data!");
            }
        });
    }

    render() {
        return (
            <div className="add">
                <div className="container">
                    <h1>Add Account</h1>
                    <h6>Add someone new to looking his/her location</h6>
                    <hr />
                    <div className="row justify-content-center">
                        <form onSubmit={this.postData}>
                            <h3 className="text-center"><b>Device ID</b></h3>
                            <h4 className="text-center">Scan Device to get the ID</h4>
                            <input type="text" name="address" ref={(val) => this.address = val} className="text-center form-control" style={{width:'220px',marginLeft:'auto',marginRight:'auto'}}></input>
                            <div className="row justify-content-center mt-3">
                                <div className="col">
                                    <h3><b>Display Name</b></h3>
                                    <h4>How do you want to be called?</h4>
                                    <input type="text" name="nickName" ref={(val) => this.nickName = val} className="form-control"></input>
                                </div>
                                <div className="col">
                                    <h3><b>Full Name</b></h3>
                                    <h4>Visible to other members</h4>
                                    <input type="text" name="fullName" ref={(val) => this.fullName = val} className="form-control"></input>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="d-flex bd-highlight">
                                    <div className="p-2 w-100 bd-highlight">
                                        <h3>Delete ID</h3>
                                        <h4>By deleting your device ID you have to scan the device again to get the ID</h4>
                                    </div>
                                    <div className="p-2 flex-shrink-1 bd-highlight">
                                        <h4><b>Delete account..</b></h4>
                                    </div>
                                </div>
                            </div> */}
                            <input type="submit" value="Submit"  className="form-control mt-5"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
