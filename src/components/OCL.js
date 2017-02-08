import React from 'react';
import { connect } from 'react-redux';
import OCLLib from '../openchemlib';

import { StructureEditor } from 'react-ocl';

import { changeQuery } from '../actions/index';

function OCL({changeQuery}) {
    return (
        <StructureEditor OCL={OCLLib} onChange={changeQuery} width="100%" />
    );
}

const mapDispatchToProps = {
    changeQuery
};

export default connect(null, mapDispatchToProps)(OCL);
