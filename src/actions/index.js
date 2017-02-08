import OCL from '../openchemlib';

export function fetchData() {
    return function (dispatch) {
        dispatch({
            type: 'FETCH_DATA',
            payload: fetchDataFromCheminfo().then(async function (data) {
                const molecules = data.data.molecules;
                dispatch({
                    type: 'PARSE_DATA_START',
                    payload: molecules.length
                });
                const db = new OCL.DB({
                    length: molecules.length,
                    // computeProperties: true
                });
                for (var i = 0; i < molecules.length; i++) {
                    if (i % 1000 === 0) {
                        dispatch({
                            type: 'PARSE_DATA_STEP',
                            payload: {
                                done: i,
                                total: molecules.length
                            }
                        });
                        await wait();
                    }
                    const molecule = molecules[i];
                    const oclMol = OCL.Molecule.fromIDCode(molecule.actID.value, false);
                    //oclMol.ensureHelperArrays(3);
                    oclMol.index = molecule.act_idx;
                    oclMol.idcode = molecule.actID.value;
                    db.push(oclMol, molecule);
                }
                return db;
            })
        });
    };
}

function fetchDataFromCheminfo() {
    return window.fetch('https://www.cheminfo.org/wikipedia/src/json/data.json').then(res => res.text()).then(JSON.parse);
}

export function clickMol(mol) {
    return {
        type: 'CLICK_MOL',
        payload: mol
    };
}

export function changeQuery(newQuery) {
    return {
        type: 'CHANGE_QUERY',
        payload: newQuery
    };
}

function wait() {
    return new Promise((resolve) => {
        setTimeout(resolve, 0);
    });
}
