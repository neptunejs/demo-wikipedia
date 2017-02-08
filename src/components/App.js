import React, { Component } from 'react';
import { connect } from 'react-redux';

import DataTable from './DataTable';
import Iframe from './Iframe';
import Modal from './Modal';
import OCL from './OCL';
import {fetchData} from '../actions/index';

class App extends Component {
    componentWillMount() {
        this.props.fetchData()
    }

    render() {
        return (
            <div style={{height: '100vh'}}>
                <Modal />
                <div
                    style={{width: '40%', height: '100%', float: 'left'}}
                >
                    <OCL style={{width: '100%', height: '40%'}} />
                    <DataTable style={{width: '100%', height: '60%'}} />
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
