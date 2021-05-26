// Dependencies
import React, { Component } from 'react'
// import { IoMdDownload } from 'react-icons/io'
// Internals
import 'components/Dashboard-Page/index.css'
import DataCSV from 'components/Dashboard-Page/CSV-Data1'
import DataCSV2 from 'components/Dashboard-Page/CSV-Data2'
import DataCSV3 from 'components/Dashboard-Page/CSV-Data3'
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
        fetch('http://103.135.5.242/receiveESP/count.php?Company=' + this.context.company)
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

    // fetchData = () => {
    //     fetch('http://103.135.5.242/receiveESP/count.php?Company=1')
    //     .then(response => {
    //         response.json().then(function(data) {
    //             if(data.success === 1){
    //                 this.setState({
    //                     result: data.result,
    //                     result_area1: data.result_area1,
    //                     result_area2: data.result_area2,
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

    render() {
        const {result, result_area1, result_area2} = this.state;

        return (
            <div className="summary">
                <div className="container text-center">
                    <h1>Summary</h1>
                    <h6>{this.context.timestamp}</h6>
                    <div className="row mt-3">
                        <div className="col a-summary">
                            <h3>Area - 1</h3>
                            <h5>{result_area1}</h5>
                        </div>
                        <div className="col b-summary">
                            <h3>Total</h3>
                            <h5>{result}</h5>
                        </div>
                        <div className="col c-summary">
                            <h3>Area - 2</h3>
                            <h5>{result_area2}</h5>
                        </div>
                    </div>
                    <h2><span><b>Data</b></span> Summary</h2>
                    <h6>Choose the data summary that you want to know</h6>
                    <hr />
                    <div className="row mb-5">
                        <DataCSV title={this.context.nickname}/>
                        <DataCSV2 title="Area 1"/>
                        <DataCSV3 title="Area 2"/>
                        {/* <a href="tel:082218358955" className="d-flex bd-highlight box-summary">
                            <div className="p-2 w-100 bd-highlight">Tracking Data - {this.context.nickname}</div>
                            <div className="p-2 flex-shrink-1 bd-highlight icon"><IoMdDownload /></div>
                        </a>
                        <a href="tel:082218358955" className="d-flex bd-highlight box-summary">
                            <div className="p-2 w-100 bd-highlight">Tracking Data - Area 1</div>
                            <div className="p-2 flex-shrink-1 bd-highlight icon"><IoMdDownload /></div>
                        </a>
                        <a href="tel:082218358955" className="d-flex bd-highlight box-summary">
                            <div className="p-2 w-100 bd-highlight">Tracking Data - Area 2</div>
                            <div className="p-2 flex-shrink-1 bd-highlight icon"><IoMdDownload /></div>
                        </a> */}
                    </div>
                </div>
            </div>
        )
    }
}
