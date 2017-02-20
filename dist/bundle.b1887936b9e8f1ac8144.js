webpackJsonp([1,2],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _InfiniteTable = __webpack_require__(120);

var _InfiniteTable2 = _interopRequireDefault(_InfiniteTable);

var _Iframe = __webpack_require__(119);

var _Iframe2 = _interopRequireDefault(_Iframe);

var _Modal = __webpack_require__(121);

var _Modal2 = _interopRequireDefault(_Modal);

var _OCL = __webpack_require__(122);

var _OCL2 = _interopRequireDefault(_OCL);

var _index = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {
    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        return _react2.default.createElement(
            'div',
            { style: { height: '100vh' } },
            _react2.default.createElement(_Modal2.default, null),
            _react2.default.createElement(
                'div',
                {
                    style: { width: '40%', height: '100%', float: 'left', display: 'flex', flexDirection: 'column' }
                },
                _react2.default.createElement(
                    'div',
                    { style: { width: '100%', flex: '0 1 400px' } },
                    _react2.default.createElement(_OCL2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '100%', flex: '1 1 auto', overflow: 'auto' } },
                    _react2.default.createElement(_InfiniteTable2.default, null)
                )
            ),
            _react2.default.createElement(
                'div',
                {
                    style: { width: '60%', height: '100%', float: 'right' }
                },
                _react2.default.createElement(_Iframe2.default, null)
            )
        );
    }
}

var mapDispatchToProps = {
    fetchData: _index.fetchData
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(App);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(24);

var _data = __webpack_require__(124);

var _data2 = _interopRequireDefault(_data);

var _dataLoading = __webpack_require__(125);

var _dataLoading2 = _interopRequireDefault(_dataLoading);

var _page = __webpack_require__(126);

var _page2 = _interopRequireDefault(_page);

var _currentMol = __webpack_require__(123);

var _currentMol2 = _interopRequireDefault(_currentMol);

var _searchMode = __webpack_require__(128);

var _searchMode2 = _interopRequireDefault(_searchMode);

var _query = __webpack_require__(127);

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    data: _data2.default,
    dataLoading: _dataLoading2.default,
    page: _page2.default,
    currentMolecule: _currentMol2.default,
    query: _query2.default,
    searchMode: _searchMode2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iframe(_ref) {
    var url = _ref.url;

    return _react2.default.createElement('iframe', {
        src: url,
        style: { width: '100%', height: '99%', border: 'none' }
    });
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Iframe);

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _reactList = __webpack_require__(70);

var _reactList2 = _interopRequireDefault(_reactList);

var _reactOcl = __webpack_require__(40);

var _openchemlib = __webpack_require__(32);

var _openchemlib2 = _interopRequireDefault(_openchemlib);

var _index = __webpack_require__(43);

var _searchMol = __webpack_require__(129);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMolRender(data, clickMol) {
    return function MolRender(index, key) {
        var mol = data[index];
        return _react2.default.createElement(
            'div',
            { key: key, onClick: () => clickMol(mol) },
            _react2.default.createElement(
                'span',
                null,
                mol.code
            ),
            _react2.default.createElement(_reactOcl.SvgRenderer, {
                OCL: _openchemlib2.default,
                oclid: mol.actID.value,
                width: 300,
                height: 130
            })
        );
    };
}

function DataTable(_ref) {
    var data = _ref.data,
        clickMol = _ref.clickMol;

    return _react2.default.createElement(_reactList2.default, {
        itemRenderer: getMolRender(data, clickMol),
        length: data.length
    });
}

function mapStateToProps(state) {
    return {
        data: (0, _searchMol.getFilteredData)(state)
    };
}

var mapDispatchToProps = {
    clickMol: _index.clickMol
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DataTable);

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _reactModal = __webpack_require__(71);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(_ref) {
    var loading = _ref.loading;

    var isOpen = loading !== null;
    var content = void 0;
    if (isOpen) {
        if (loading === 0) {
            content = 'Fetching data...';
        } else {
            content = `Loading molecules... ${loading.done}/${loading.total}`;
        }
    }
    return _react2.default.createElement(
        _reactModal2.default,
        {
            isOpen: isOpen,
            style: { content: { textAlign: 'center', fontSize: '24pt' } },
            contentLabel: 'loading'
        },
        content
    );
}

function mapStateToProps(state) {
    return {
        loading: state.dataLoading
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Modal);

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _openchemlib = __webpack_require__(32);

var _openchemlib2 = _interopRequireDefault(_openchemlib);

var _reactOcl = __webpack_require__(40);

var _index = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OCL(_ref) {
    var changeQuery = _ref.changeQuery;

    return _react2.default.createElement(_reactOcl.StructureEditor, { OCL: _openchemlib2.default, onChange: changeQuery, height: 400, width: '100%' });
}

var mapDispatchToProps = {
    changeQuery: _index.changeQuery
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(OCL);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'CLICK_MOL':
            return action.payload;
        default:
            return state;
    }
};

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'FETCH_DATA_FULFILLED':
            return action.payload;
        default:
            return state;
    }
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];


    switch (action.type) {
        case 'FETCH_DATA_PENDING':
            return 0;
        case 'PARSE_DATA_START':
            return {
                done: 0,
                total: action.payload
            };
        case 'PARSE_DATA_STEP':
            return {
                done: action.payload.done,
                total: action.payload.total
            };
        case 'FETCH_DATA_FULFILLED':
            return null;
        default:
            return state;
    }
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sss';
    var action = arguments[1];

    switch (action.type) {
        case 'CHANGE_PAGE':
            return action.payload;
        default:
            return state;
    }
};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'CHANGE_QUERY':
            {
                if (action.payload === null) return null;
                return _openchemlib2.default.Molecule.fromIDCode(action.payload.oclid, action.payload.coordinates);
            }
        default:
            return state;
    }
};

var _openchemlib = __webpack_require__(32);

var _openchemlib2 = _interopRequireDefault(_openchemlib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'substructure';
    var action = arguments[1];

    switch (action.type) {
        case 'CHANGE_SEARCH_MODE':
            return action.payload;
        default:
            return state;
    }
};

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilteredData = undefined;

var _reselect = __webpack_require__(72);

var getData = state => state.data;
var getQuery = state => state.query;
var getSearchMode = state => state.searchMode;

var getFilteredData = exports.getFilteredData = (0, _reselect.createSelector)([getData, getQuery, getSearchMode], (data, query, searchMode) => {
    if (data.length === 0) return [];
    if (query === null) return data.data;
    console.time('search');
    var result = data.search(query, { mode: searchMode }).data;
    console.timeEnd('search');
    return result;
});

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(14);

var _redux = __webpack_require__(24);

var _reduxPromiseMiddleware = __webpack_require__(41);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reduxThunk = __webpack_require__(42);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _App = __webpack_require__(117);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(118);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxPromiseMiddleware2.default)())(_redux.createStore);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: createStoreWithMiddleware(_index2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _full = __webpack_require__(69);

var OCL = _interopRequireWildcard(_full);

var _extend = __webpack_require__(68);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _extend2.default)(OCL);

exports.default = OCL;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchData = fetchData;
exports.clickMol = clickMol;
exports.changeQuery = changeQuery;

var _openchemlib = __webpack_require__(32);

var _openchemlib2 = _interopRequireDefault(_openchemlib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function fetchData() {
    return function (dispatch) {
        dispatch({
            type: 'FETCH_DATA',
            payload: fetchDataFromCheminfo().then((() => {
                var _ref = _asyncToGenerator(function* (data) {
                    var molecules = data.data.molecules;
                    dispatch({
                        type: 'PARSE_DATA_START',
                        payload: molecules.length
                    });
                    var db = new _openchemlib2.default.DB({
                        length: molecules.length
                    });
                    for (var i = 0; i < molecules.length; i++) {
                        if (i % 1000 === 0) {
                            dispatch({
                                type: 'PARSE_DATA_STEP',
                                payload: {
                                    done: i,
                                    total: molecules.length
                                }
                            });
                            yield wait();
                        }
                        var molecule = molecules[i];
                        var oclMol = _openchemlib2.default.Molecule.fromIDCode(molecule.actID.value, false);
                        //oclMol.ensureHelperArrays(3);
                        oclMol.index = molecule.act_idx;
                        oclMol.idcode = molecule.actID.value;
                        db.push(oclMol, molecule);
                    }
                    return db;
                });

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            })())
        });
    };
}

function fetchDataFromCheminfo() {
    return window.fetch('https://www.cheminfo.org/wikipedia/src/json/data.json').then(res => res.text()).then(JSON.parse);
}

function clickMol(mol) {
    return {
        type: 'CLICK_MOL',
        payload: mol
    };
}

function changeQuery(newQuery) {
    return {
        type: 'CHANGE_QUERY',
        payload: newQuery
    };
}

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}

/***/ })

},[304]);