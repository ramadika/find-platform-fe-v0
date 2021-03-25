// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Help-Page/index.css'
import { DataContext } from 'components/Context'

export default class index extends Component {
    static contextType = DataContext;
    render() {
        return (
            <div className="help">
                <div className="container text-center">
                    <h1>Help</h1>
                    <h6>{this.context.timestamp}</h6>
                    <div className="row">
                        
                    </div>
                </div>
            </div>
        )
    }
}
