import OCL from '../openchemlib';

export default function(state = null, action) {
    switch (action.type) {
        case 'CHANGE_QUERY': {
            if (action.payload === null)
                return null;
            return OCL.Molecule.fromIDCode(action.payload.oclid, action.payload.coordinates);
        }
        default:
            return state;
    }
}
