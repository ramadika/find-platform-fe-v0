// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
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
        Axios.post('https://103.135.5.242/backend-app/login.php',{
            NickName: this.NickName.value,
            Fullname: this.Fullname.value,
            Address: this.Address.value
        })
        .then(function({data}) {
            if(data.success === 1){
                this.setState({
                    count: 1
                });
                alert(data.message);
            }
            else {
                alert(data.message);
            }
        }.bind(this)) 
        .catch(function (error) {
            console.log(error);
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
                        <form onSubmit={this.postData} className="form-add">
                            <h3 className="text-center"><b>Device ID</b></h3>
                            <h4 className="text-center">Scan Device to get the ID</h4>
                            <input type="text" name="Address" ref={(val) => this.Address = val} className="form-control"></input>
                            <div className="row justify-content-center mt-3 input-add">
                                <div className="col">
                                    <h3><b>Display Name</b></h3>
                                    <h4>How do you want to be called?</h4>
                                    <input type="text" name="NickName" ref={(val) => this.NickName = val} className="form-control"></input>
                                </div>
                                <div className="col">
                                    <h3><b>Full Name</b></h3>
                                    <h4>Visible to other members</h4>
                                    <input type="text" name="Fullname" ref={(val) => this.Fullname = val} className="form-control"></input>
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
