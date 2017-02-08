export default function(state = null, action) {

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
}
