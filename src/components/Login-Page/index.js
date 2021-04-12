// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from "sweetalert";
import { Redirect } from 'react-router-dom'
// Internals
import 'components/Login-Page/index.css'
import img1 from 'assets/Cipta_Things-removebg.png'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext;
    constructor(){
        super();
        this.state = {
            message: '',
            referrer: false,
        };
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://103.135.5.242/receiveESP/login.php', {
            username: this.username.value,
            password: this.password.value,
        })
        .then(function({data}) {
            if(data.success === 1){
                this.setState({
                    message: data.message,
                    referrer: true,
                });
                this.context.handleAdd(data.company, data.address, data.nickname, data.fullname, data.email, data.phonenumber);
                event.target.reset();
            }
            else {
                this.setState({
                    message: data.address,
                });
                swal(this.state.message, {
                    icon: "error",
                });
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { referrer } = this.state;

        if (referrer === true) {
            return (
                <Redirect to={'/home'} />
            )
        }

        return (
            <div className="login">
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col d-flex align-items-end col-login">
                            <h3>
                                <span>Make it simple, but</span>
                                <span>significant</span>
                            </h3>
                        </div>
                        <div className="col">
                            <h6><img src={img1} alt="img"></img><b>Cipta</b>Things.</h6>
                            <h1 className="mt-5"><b>Login</b></h1>
                            <h2 className="mt-4">Login to your account</h2>
                            <h4>Thank you for get back to CiptaThings. lets access the platform</h4>
                            <form className="mt-5" onSubmit={this.postData}>
                                <h5><b>Username</b></h5>
                                <input type="text" name="username" ref={(val) => this.username = val} className="form-control" placeholder="Email or username"></input>
                                <h5><b>Password</b></h5>
                                <input type="password" name="password" ref={(val) => this.password = val} className="form-control" placeholder="password"></input>
                                <input type="submit" value="Submit"  className="form-control my-4"></input>
                            </form>
                            <h5>Don't have an account yet? <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/">Sign Up</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
