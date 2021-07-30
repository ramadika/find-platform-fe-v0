// Dependencies
import React, { Component } from 'react'
import { CSVLink } from "react-csv";
// import Axios from 'axios';
// import swal from "sweetalert";
// Internals
import 'components/Dashboard-Page/CSV-Data1/index.css'

const headers = [
    { label: "MAC-Address", key: "MAC_Address" },
    { label: "Name", key: "Fullname" },
    { label: "Area", key: "Area" },
    { label: "Time", key: "Time" }
];

export default class index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        result: []
      }
      this.csvLinkEl = React.createRef();
    }
  
    // getUserList = () => {
    //   return fetch('http://103.135.5.242/receiveESP/get_csv1.php')
    //     .then(res => res.json());
    // }

    // http://103.135.5.242/receiveESP/get_csv1.php?Address=' + this.props.address
  
    getUserList = () => {
      return fetch('http://192.168.2.8:8080/User-Server/get_csv1.php?Address=' + this.props.address)
        .then(res => res.json());
      // Axios.post('http://192.168.43.36/receiveESP/get_csv1.php', {
      //   user: this.props.title,
      // })
      // .then(function({res}) {
      //     if(res.success === 1){
      //         this.setState({
      //             result: res.result,
      //         });
      //         return this.state.result.json();
      //     }
      // }.bind(this))
      // .catch(function (error) {
      //     console.log(error);
      // });
    }
  
    downloadReport = async () => {
      const data = await this.getUserList();
      this.setState({ data: data }, () => {
        setTimeout(() => {
          this.csvLinkEl.current.link.click();
        });
      });
    }
  
    render() {
        const { data } = this.state;
        const { title } = this.props;
    
        return (
            <div className="csv-data">
                <h3>Tracking Data - {title}</h3>
                <input type="button" value="&#9660;  Download" className="btn" onClick={this.downloadReport} />
                <CSVLink headers={headers} filename="Tracking_data.csv" data={data} ref={this.csvLinkEl} />
            </div>
        )
    }
}
