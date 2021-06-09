import React, { Component } from 'react';

export default class FetchComponent extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch('http://localhost:9000/consumer')
        .then(response => response.json())
        .then(data => this.props.onAfterFetch(data));
    }

    render() {
        return (
            <button onClick={this.fetchData}>Fetch</button>
        )
    }
}