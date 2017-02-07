export default function(state = null, action) {
    switch (action.type) {
        case 'CLICK_MOL':
            return action.payload;
        default:
            return state;
    }
}
