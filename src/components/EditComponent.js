import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {
    constructor(props){
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {name: '',port: ''};
    }
    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Add Host Name:  </label>
                    <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                    <label>Add Server Port: </label>
                    <input type="text" value={this.state.port} className="form-control" onChange={this.onChangePort}></input>
                    </div>
                    <div className="form-group">
                    <input type="submit" value="Update server" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}