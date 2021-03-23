// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/DataList-Page/index.css'
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

    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 1000)
    }

    render() {
        const {result, timestamp} = this.state;

        return (
            <div className="dataList">
                <div className="container text-center">
                    <h1>Data List</h1>
                    <h6>{timestamp}</h6>
                    <div className="row mt-3">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th>Mac Address</th>
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
                </div>
            </div>
        )
    }
}
