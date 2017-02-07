import React, { Component } from 'react';
import { connect } from 'react-redux';

import DataTable from './DataTable';
import Iframe from './Iframe';
import {fetchData} from '../actions/index';

class App extends Component {
    componentWillMount() {
        this.props.fetchData()
    }

    render() {
        return (
            <div style={{height: '100vh'}}>
                <div
                    style={{width: '40%', height: '100%', float: 'left'}}
                >
                    <DataTable />
                </div>
                <div
                    style={{width: '60%', height: '100%', float: 'right'}}
                >
                    <Iframe />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchData
};

export default connect(null, mapDispatchToProps)(App);
