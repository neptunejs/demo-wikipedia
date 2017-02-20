import React from 'react';
import {connect} from 'react-redux';
import ReactList from 'react-list';
import {SvgRenderer} from 'react-ocl';
import OCL from '../openchemlib';

import {clickMol} from '../actions/index';
import {getFilteredData} from '../selectors/searchMol';

function getMolRender(data, clickMol) {
    return function MolRender(index, key) {
        const mol = data[index];
        return (
            <div key={key} onClick={() => clickMol(mol)}>
                <span>{mol.code}</span>
                <SvgRenderer
                    OCL={OCL}
                    oclid={mol.actID.value}
                    width={300}
                    height={130}
                />
            </div>
        );
    };
}

function DataTable({data, clickMol}) {
    return (
        <ReactList
            itemRenderer={getMolRender(data, clickMol)}
            length={data.length}
        />
    );
}

function mapStateToProps(state) {
    return {
        data: getFilteredData(state)
    };
}

const mapDispatchToProps = {
    clickMol
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
