import React from 'react';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import {SvgRenderer} from 'react-ocl';
import OCL from '../openchemlib';

import {clickMol} from '../actions/index';
import {getFilteredData} from '../selectors/searchMol';

function MolRender({value}) {
    return <SvgRenderer
        OCL={OCL}
        oclid={value.value}
        width={300}
        height={130}
    />
}

const columns = [
    {
        header: 'Name',
        id: 'name',
        accessor: 'code'
    },
    {
        header: 'Structure',
        id: 's',
        accessor: 'actID',
        render: MolRender
    }
];

function DataTable({data, clickMol}) {
    return (
        <ReactTable
            data={data}
            defaultPageSize={5}
            showPagination={true}
            columns={columns}
            getTrProps={getTrProps(clickMol)}
        />
    );
}

function getTrProps(clickMol) {
    return function (state, rowInfo) {
        return {
            onClick: () => clickMol(rowInfo.row)
        };
    };
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
