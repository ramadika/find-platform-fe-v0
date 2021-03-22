import React, { Component } from 'react'
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    render() {
        const contextValue = {

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
