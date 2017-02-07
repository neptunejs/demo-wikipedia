import { combineReducers } from 'redux';

import dataReducer from './data';
import pageReducer from './page';
import currentMolReducer from './currentMol';

const rootReducer = combineReducers({
    data: dataReducer,
    page: pageReducer,
    currentMolecule: currentMolReducer
});

export default rootReducer;
