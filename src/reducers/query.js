export default function(state = null, action) {
    switch (action.type) {
        case 'CHANGE_QUERY':
            return action.payload;
        default:
            return state;
    }
}
