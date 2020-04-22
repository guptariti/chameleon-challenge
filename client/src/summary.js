import React, { Component } from 'react';
import './App.css';

//to represent a summary of a person
class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //function to reload the page
    reload() {
        window.location.reload();
      }
    
    //component render method
    render() {
        return (
        <div className="mainDiv">
            <div className="summary">
                <h1>Who Am I?</h1>
                <img src={this.props.imgUrl}></img>
                <h3>Name: {this.props.name}</h3>
                <h3>Age: {this.props.age}</h3>
                <h3>Location: {this.props.location}</h3>
                <h3>Email: {this.props.email}</h3>
                <h3>Encrypted Pass: {this.props.password}</h3>
                <button className="rfrsh" onClick={this.reload}>Generate Person</button>
            </div> 
        </div>
        );
    }
}

export default Summary;