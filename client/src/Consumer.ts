import React, { Component, useMemo } from 'react'
import FetchComponent from './FetchComponent';
import Table from './Table';
import './User.css';


export default class Consumer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.onAfterFetch = this.onAfterFetch.bind(this);
    }

    onAfterFetch(data) {
        console.log('onAfterFetch: ' + data);
        this.setState({
            data: data
        });
    }

    render() {
        const data = [] //useData();
        const columns =  [{  
            Header: 'Topic',  
            accessor: 'topic',
           }
           ,{  
            Header: 'Value',  
            accessor: 'value' ,
            }
           
           ,{  
           Header: 'Partition',  
           accessor: 'partition' ,
           }
           ,{  
           Header: 'Offset',  
           accessor: 'offset',
           }
        ]; //useColumns(); 
        return (
            <>
            < br/>
            < br/>
            < br/>
            <FetchComponent onAfterFetch={this.onAfterFetch}/>
            < br/>
            < br/>
            < br/>
            <Table columns={columns} data={this.state.data} />
            </>
        );
    }
    
}