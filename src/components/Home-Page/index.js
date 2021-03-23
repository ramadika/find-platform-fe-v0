// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Home-Page/index.css'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext; 
    constructor(props){
        super(props);
        this.state = {
            result: [],
            timestamp: "",
        }
    }

    fetchData = () => { 
        fetch('http://192.168.5.183/receiveESP/view.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        result: data.result,
                        timestamp: data.timestamp,
                    });
                    // console.log(this.state.address);
                    // console.log(this.state.rssi);   
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

    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 1000);
    }

    render() {
        const {result, timestamp} = this.state;
        
        return (
            <div className="home">
                <div className="container text-center">
                    <h1>People Location</h1>
                    <h6>{timestamp}</h6>
                    <div className="row d-flex justify-content-center mt-3">
                        <form onSubmit={this.fetchData}>
                            <div className="form-group row">
                                <input type="text" ref={(val) => (this.name = val)} className="col form-control text-center" placeholder="Name" />
                            </div>
                        </form>
                    </div>
                    {/* <div className="row mt-3">
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Mac-Address</th>
                                        <th>RSSI</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(results => (
                                            <tr key={results.id}>
                                                <th scope="row">{results.Address}</th>
                                                <td>{results.RSSI}</td>
                                                <td>{results.Time}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
