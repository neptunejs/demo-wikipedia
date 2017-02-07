export default function(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload.data.molecules;
        default:
            return state;
    }
}
