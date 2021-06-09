import React, { Component } from 'react';

export default class Producer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            message: ''
        }
    }

    handleSubmit = (event) => {
        console.log(this.state);
        fetch('http://localhost:9000/producer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state)
        }).then((response) => {
            console.log(response);
            return response.json();
        });
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Topic: <input type="text" value={this.state.topic} name="topic" onChange={this.handleChange} /></label>
                <br />
                <label>Message: <input type="text" value={this.state.message} name="message" onChange={this.handleChange} /></label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
    
}