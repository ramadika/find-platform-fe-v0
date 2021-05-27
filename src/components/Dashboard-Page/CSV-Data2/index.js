// Dependencies
import React, { Component } from 'react'
import { CSVLink } from "react-csv";
// Internals
import 'components/Dashboard-Page/CSV-Data2/index.css'

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
        data: []
      }
      this.csvLinkEl = React.createRef();
    }
  
    getArea1List = () => {
      return fetch('http://103.135.5.242/receiveESP/get_csv2.php')
        .then(res => res.json());
    }
  
    downloadReport = async () => {
        const data = await this.getArea1List();
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
