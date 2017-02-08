import { combineReducers } from 'redux';

import dataReducer from './data';
import dataLoadingReducer from './dataLoading';
import pageReducer from './page';
import currentMolReducer from './currentMol';
import searchModeReducer from './searchMode';
import queryReducer from './query';

const rootReducer = combineReducers({
    data: dataReducer,
    dataLoading: dataLoadingReducer,
    page: pageReducer,
    currentMolecule: currentMolReducer,
    query: queryReducer,
    searchMode: searchModeReducer
});

export default rootReducer;
