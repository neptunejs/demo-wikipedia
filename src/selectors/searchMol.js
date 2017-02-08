import { createSelector } from 'reselect';
import OCLLib from '../openchemlib';


const getData = (state) => state.data;
const getQuery = (state) => state.query;
const getSearchMode = (state) => state.searchMode;

export const getFilteredData = createSelector(
    [getData, getQuery, getSearchMode],
    (data, query, searchMode) => {

    }
);
