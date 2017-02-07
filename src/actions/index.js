export function fetchData() {
    return {
        type: 'FETCH_DATA',
        payload: window.fetch('https://www.cheminfo.org/wikipedia/src/json/data.json').then(res => res.text()).then(JSON.parse)
    };
}

export function clickMol(mol) {
    return {
        type: 'CLICK_MOL',
        payload: mol
    };
}
