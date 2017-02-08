export default function(state = 'substructure', action) {
    switch (action.type) {
        case 'CHANGE_SEARCH_MODE':
            return action.payload;
        default:
            return state;
    }
}
