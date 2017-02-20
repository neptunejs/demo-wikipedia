import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfiniteTable from './InfiniteTable';
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
                    style={{width: '40%', height: '100%', float: 'left', display: 'flex', flexDirection: 'column'}}
                >
                    <div style={{width: '100%', flex: '0 1 400px'}}>
                        <OCL />
                    </div>
                    <div style={{width: '100%', flex: '1 1 auto', overflow: 'auto'}}>
                        <InfiniteTable />
                    </div>
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
