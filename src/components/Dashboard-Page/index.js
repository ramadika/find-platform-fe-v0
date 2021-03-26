// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Dashboard-Page/index.css'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext;
    constructor(props){
        super(props);
        this.state = {
            result: "",
            result_area1: "",
            result_area2: "",
        }
    }

    fetchData = () => {
        fetch('http://192.168.5.183/receiveESP/count.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        result: data.result,
                        result_area1: data.result_area1,
                        result_area2: data.result_area2,
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
        setInterval(this.fetchData, 1000);
    }

    render() {
        const {result, result_area1, result_area2} = this.state;

        return (
            <div className="summary">
                <div className="container text-center">
                    <h1>Summary</h1>
                    <h6>{this.context.timestamp}</h6>
                    <div className="row mt-3">
                        <div className="col a-summary">
                            <h3>Section A</h3>
                            <h5>{result_area1}</h5>
                        </div>
                        <div className="col b-summary">
                            <h3>Total</h3>
                            <h5>{result}</h5>
                        </div>
                        <div className="col c-summary">
                            <h3>Section b</h3>
                            <h5>{result_area2}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
