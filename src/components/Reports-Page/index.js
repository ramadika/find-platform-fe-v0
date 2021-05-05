// Dependencies
import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
// Internals
import 'components/Reports-Page/index.css'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext;
    constructor(props){
        super(props);
        this.state = {
            result: [],
        }
    }

    fetchData = () => {
        fetch('http://103.135.5.242/receiveESP/view.php?Company=' + this.context.company)
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        result: data.result,
                    })
                }
                else {
                    console.log(data.message);
                }
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    // fetchData = () => {
    //     fetch('http://103.135.5.242/receiveESP/view.php?Company=1')
    //     .then(response => {
    //         response.json().then(function(data) {
    //             if(data.success === 1){
    //                 this.setState({
    //                     result: data.result,
    //                 })
    //             }
    //             else {
    //                 console.log(data.message);
    //             }
    //         }.bind(this));
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }

    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 1000);
    }

    componentDidUpdate() {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }

    render() {
        const {result} = this.state;

        return (
            <div className="dataList">
                <div className="container text-center">
                    <h1>List of Data Location</h1>
                    <h6>{this.context.timestamp}</h6>
                    <div className="row mt-3 mb-5">
                        <div className="table-responsive">
                            <table id="example" className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Mac Address</th>
                                        <th>RSSI</th>
                                        <th>Area</th>
                                        <th>Time</th>
                                        <th>Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(results => (
                                            <tr key={results.id}>
                                                <th scope="row">{results.User}</th>
                                                <td>{results.Address}</td>
                                                <td>{results.RSSI}</td>
                                                <td>{results.Area}</td>
                                                <td>{results.Time}</td>
                                                <td><a href="tel:082218358955">555-428-0940</a></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
