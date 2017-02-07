import React from 'react';
import { connect } from 'react-redux';

import { clickMol } from '../actions/index';

function DataTable({data, clickMol}) {
    return (
        <div>
            {data.slice(0, 10).map(getTableElement(clickMol))}
        </div>
    );
}

function getTableElement(clickMol) {
    return (mol) => (
        <div
            key={mol.id + '_' + mol.actID.value}
            onClick={() => clickMol(mol)}
        >{mol.code}</div>
    );
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

const mapDispatchToProps = {
    clickMol
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
