// Dependencies
import React, { Component } from "react";
import Axios from "axios";
import swal from "sweetalert";
// Internals
import "components/Account-Page/Add-Page/index.css";
import { api_url } from "utils";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      address: "",
      referrer: 0,
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
        Axios.post(`${api_url}/receiveESP/create.php`, {
          nickName: this.nickName.value,
          fullName: this.fullName.value,
          address: this.state.address,
        })
          .then(
            function ({ data }) {
              if (data.success === 1) {
                this.setState({
                  message: data.message,
                  referrer: 0,
                });
                event.target.reset();
                // alert(data.message);
                swal(this.state.message, {
                  icon: "success",
                });
              } else {
                // alert(data.message);
                swal(this.state.message, {
                  icon: "error",
                });
              }
            }.bind(this)
          )
          .catch(function (error) {
            console.log(error);
          });
      } else {
        swal("Change your data!");
      }
    });
  };

  getData = (event) => {
    event.preventDefault();
    event.persist();
    Axios.post(`${api_url}/receiveESP/get.php`, {
      counter: 1,
    })
      .then(
        function ({ data }) {
          if (data.success === 1) {
            this.setState({
              address: data.address,
              referrer: 1,
            });
            // alert(data.message);
            swal(data.message, {
              icon: "success",
            });
          } else {
            // alert(data.message);
            swal(data.message, {
              icon: "error",
            });
          }
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { referrer, address } = this.state;

    let addUser;
    if (referrer === 1) {
      addUser = (
        <form onSubmit={this.postData}>
          <h3 className="text-center">
            <b>
              Device ID <span style={{ color: "red" }}>*</span>
            </b>
          </h3>
          <h4 className="text-center">Scan Device to get the ID</h4>
          <input
            type="text"
            name="address"
            value={address}
            className="text-center form-control"
            style={{ width: "220px", marginLeft: "auto", marginRight: "auto" }}
            disabled
          ></input>
          <div className="row justify-content-center mt-3">
            <div className="col">
              <h3>
                <b>
                  Display Name <span style={{ color: "red" }}>*</span>
                </b>
              </h3>
              <h4>How do you want to be called?</h4>
              <input
                type="text"
                name="nickName"
                ref={(val) => (this.nickName = val)}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col">
              <h3>
                <b>
                  Full Name <span style={{ color: "red" }}>*</span>
                </b>
              </h3>
              <h4>Visible to other members</h4>
              <input
                type="text"
                name="fullName"
                ref={(val) => (this.fullName = val)}
                className="form-control"
                required
              ></input>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col">
              <h3>
                <b>Email</b>
              </h3>
              <h4>Receive logging in info</h4>
              <input
                type="text"
                name="nickName"
                ref={(val) => (this.nickName = val)}
                className="form-control"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              ></input>
            </div>
            <div className="col">
              <h3>
                <b>
                  Phone Number <span style={{ color: "red" }}>*</span>
                </b>
              </h3>
              <h4>For receiving notifications</h4>
              <input
                type="text"
                name="fullName"
                ref={(val) => (this.fullName = val)}
                className="form-control"
                required
              ></input>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="form-control mt-5"
          ></input>
        </form>
      );
    } else if (referrer === 0) {
      addUser = (
        <div>
          <button className="form-control" onClick={this.getData}>
            Get the ID
          </button>
          <h4>Click the button to get the ID of your device</h4>
        </div>
      );
    }
    return (
      <div className="add">
        <div className="container">
          <h1>Add Account</h1>
          <h6>Add someone new to looking his/her location</h6>
          <hr />
          <div className="row justify-content-center">{addUser}</div>
        </div>
      </div>
    );
  }
}
