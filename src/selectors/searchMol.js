import { createSelector } from 'reselect';

const getData = (state) => state.data;
const getQuery = (state) => state.query;
const getSearchMode = (state) => state.searchMode;

export const getFilteredData = createSelector(
    [getData, getQuery, getSearchMode],
    (data, query, searchMode) => {
        if (data.length === 0) return [];
        if (query === null) return data.data;
        return data.search(query, {mode: searchMode}).data;
    }
);
