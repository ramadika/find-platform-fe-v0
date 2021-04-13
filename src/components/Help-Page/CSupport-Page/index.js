// Dependencies
import React, { Component } from 'react'
import Axios from 'axios';
import swal from "sweetalert";
// Internals
import 'components/Help-Page/CSupport-Page/index.css'
import img1 from 'assets/Cipta_Things-removebg.png'
import img2 from 'assets/mario-gogh-VBLHICVh-lI-unsplash.jpg'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext; 
    constructor(){
        super();
        this.state = {
            message: '',
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
                Axios.post("https://103.135.5.242/receiveESP/create.php", {
                    firstName: this.firstName.value,
                    lastName: this.lastName.value,
                    email: this.email.value,
                    message: this.message.value,
                })
                .then(function({data}) {
                    if(data.success === 1){
                        this.setState({
                            message: data.message,
                        });
                        event.target.reset();
                        // alert(data.message);
                        swal(this.state.message, {
                            icon: "success",
                        });
                    }
                    else {
                        // alert(data.message);
                        swal(this.state.message, {
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
            <div className="csupport">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={img2} alt="img2" style={{width:'575px', height:'auto'}}></img>
                            <div className="row">
                                <div className="col">
                                    <h4>
                                        <span><b>North Cikarang</b></span>
                                        <span>Jababeka XIV</span>
                                        <span>hello@mail.com</span>
                                        <span><a href="tel:082218358955">+02 1234 567</a></span>
                                    </h4>
                                </div>
                                {/* <div className="col">
                                    <h4>
                                        <span><b>South Tangerang</b></span>
                                        <span>Pamulang</span>
                                        <span>hello@mail.com</span>
                                        <span><a href="tel:082218358955">+02 1234 567</a></span>
                                    </h4>
                                </div> */}
                            </div>
                        </div>
                        <div className="col">
                            <h6 className="text-center"><img src={img1} alt="img"></img><b>Cipta</b>Things.</h6>
                            <h1 className="text-center">Contact Us</h1>
                            <h5 className="text-center">Have an inquiry or some feedback for us? Fill out the form below to contact our team.</h5>
                            <form onSubmit={this.postData}>
                                <div className="row justify-content-center mt-3">
                                    <div className="col">
                                        <h3><b>First Name <span style={{color:'red'}}>*</span></b></h3>
                                        <input type="text" name="firstName" ref={(val) => this.firstName = val} className="form-control" required></input>
                                    </div>
                                    <div className="col">
                                        <h3><b>Last Name <span style={{color:'red'}}>*</span></b></h3>
                                        <input type="text" name="lastName" ref={(val) => this.lastName = val} className="form-control" required></input>
                                    </div>
                                </div>
                                <h3><b>Email Address <span style={{color:'red'}}>*</span></b></h3>
                                <input type="email" name="email" ref={(val) => this.email = val} className="form-control" required></input>
                                <h3><b>Message <span style={{color:'red'}}>*</span></b></h3>
                                <textarea name="message" ref={(val) => this.message = val} className="form-control" rows="4" cols="50" required></textarea>
                                <input type="submit" value="Get in touch"  className="form-control my-4"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
