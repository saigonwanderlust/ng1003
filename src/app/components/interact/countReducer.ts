export function countReducer (state = 1, action) {
    if (action.type === 'INCREASE') return state + 1;
    if (action.type === 'DESCREASE') return state - 1;
    if (action.type === 'RESET') return 1;
    return state;
}

// dinh nghia ra store
// lay du lieu tu store va hien thi
// thay doi du lieu tu store

// { type: 'REMOVE_WORD', _id: 'abcd' }
