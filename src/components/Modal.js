import React from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';


function Modal({loading}) {
    const isOpen = loading !== null;
    let content;
    if (isOpen) {
        if (loading === 0) {
            content = 'Fetching data...'
        } else {
            content = `Loading molecules... ${loading.done}/${loading.total}`;
        }
    }
    return (
        <ReactModal isOpen={isOpen} style={{content:{textAlign: 'center', fontSize: '24pt'}}}>
            {content}
        </ReactModal>
    );
}

function mapStateToProps(state) {
    return {
        loading: state.dataLoading
    };
}

export default connect(mapStateToProps)(Modal);
