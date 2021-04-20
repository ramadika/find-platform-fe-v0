// Dependencies
import React, { Component } from 'react'
import Axios from 'axios'
// Internals
import 'components/Home-Page/index.css'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext; 
    constructor(props){
        super(props);
        this.state = {
            result: [],
            referrer: 0,
        }
    }

    postData = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('https://103.135.5.242/receiveESP/search.php', {
            User: this.User.value,
            Company: this.Company.value,
        })
        .then(function({data}) {
            if(data.success === 1){
                this.setState({
                    result: data.result,
                    referrer: 1
                });
            }
            else {
                this.setState({
                    referrer: 0
                });
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const {result, referrer} = this.state;
        let showUsers;
        if(referrer === 1){
            showUsers = (
                <div className="table-responsive">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Time</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                result.map(results => (
                                    <tr key={results.id}>
                                        <th scope="row">{results.User}</th>
                                        <td>Area - {results.Area}</td>
                                        <td>{results.Time}</td>
                                        <td><a href="tel:082218358955">555-428-0940</a></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
        else if (referrer === 0) {
            showUsers = (
                <h3>Data not Found</h3>
            );
        }

        return (
            <div className="home">
                <div className="container text-center">
                    <h1>People Location</h1>
                    <h6>{this.context.timestamp}</h6>
                    <div className="row d-flex justify-content-center mt-4">
                        <form onSubmit={this.postData}>
                            <div className="form-group row">
                                {/* <input type="hidden" value={this.context.company} ref={(val) => (this.Company = val)} /> */}
                                <input type="hidden" value={1} ref={(val) => (this.Company = val)} />
                                <input type="text" ref={(val) => (this.User = val)} className="col form-control text-center" placeholder="Name" />
                            </div>
                        </form>
                    </div>
                    <div className="row mt-3">
                        {showUsers}
                    </div>
                </div>
            </div>
        )
    }
}
