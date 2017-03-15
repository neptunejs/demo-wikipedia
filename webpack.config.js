'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'openchemlib-extended/lib/extend',
    'react',
    'react-dom',
    'react-list',
    'react-modal',
    'react-ocl',
    'react-redux',
    'redux',
    'redux-promise-middleware',
    'redux-thunk',
    'reselect',
];

const OCL_LIB = [
    'openchemlib/full'
];

const webpackConfig = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS,
        ocl: OCL_LIB
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    // devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'ocl', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    const BabiliPlugin = require('babili-webpack-plugin');
    const notOCL = {
        test(filename) {
            return filename.endsWith('.js') && !filename.startsWith('ocl');
        }
    };
    webpackConfig.plugins.push(new BabiliPlugin({}, {
        test: notOCL
    }));
}

module.exports = webpackConfig;
