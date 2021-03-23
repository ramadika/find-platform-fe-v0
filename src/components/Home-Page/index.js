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
            address: "",
            rssi: 0
        }
    }

    fetchData = () => { 
        fetch('http://192.168.5.183/receiveESP/index.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        address: data.timestamp,
                        rssi: data.rssi,
                    });
                    // console.log(this.state.address);
                    // console.log(this.state.rssi);   
                }
                else {
                    // console.log(data.message);
                }
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 5000);
    }

    render() {
        const {address, rssi} = this.state;
        
        return (
            <div className="home">
                <div className="container text-center">
                    <h1>Track User</h1>
                    <div className="row">
                        <div className="col">
                            <h2>Mac-Address</h2>
                            <h5>{address}</h5>
                        </div>
                        <div className="col">
                            <h2>RSSI</h2>
                            <h5>{rssi}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
