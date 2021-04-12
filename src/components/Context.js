import React, { Component } from 'react'
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        result: [],
        timestamp: "",
        company: "",
        address: "",
        nickname: "",
        fullname: "",
        email: "",
        phonenumber: "",
        url: 'http://103.135.5.242/receiveESP/view.php',
    } 
    
    fetchData = () => {
        fetch(this.state.url)
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        result:data.result,
                        timestamp: data.timestamp,
                    });
                } 
                else{
                    console.log(data.message);
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.fetchData();
        setInterval(this.fetchData, 1000)
    }

    handleAdd = (comp, addr, nick, full, emai, phon) => {
        this.setState({
            company: comp,
            address: addr,
            nickname: nick,
            fullname: full,
            email: emai,
            phonenumber: phon,
        })
    }

    render() {
        const contextValue = {
            result: this.state.result,
            timestamp: this.state.timestamp,
            company: this.state.company,
            address: this.state.address,
            nickname: this.state.nickname,
            fullname: this.state.fullname,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            handleAdd: this.handleAdd,
        }
        return (
            <div>
                <DataContext.Provider value={contextValue}>
                    {this.props.children}
                </DataContext.Provider>
            </div>
        )
    }
}
