import React from 'react';
import { connect } from 'react-redux';

function Iframe({url}) {
    return (
        <iframe
            src={url}
            style={{width: '100%', height: '99%', border: 'none'}}
        />
    );
}

function toUrl(code) {
    return `https://en.wikipedia.org/w/index.php?title=${code}&printable=yes`;
    // return 'https://en.wikipedia.org/api/rest_v1/page/html/' + code;
}

function mapStateToProps(state) {
    return {
        url: state.currentMolecule ? toUrl(state.currentMolecule.code) : null
    };
}

export default connect(mapStateToProps)(Iframe);
