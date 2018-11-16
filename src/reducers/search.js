import * as actionTypes from '../constants/actionTypes';

const initialState = {
    headers: {},
    body: {},
    items: []
};

const search = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GOT_SEARCH_RESULTS:
            return { 
                ...state,
                headers: action.payload.headers,
                body: action.payload.body,
                items: action.payload.items
            };
        case actionTypes.GOT_MORE_SEARCH_RESULTS:
            return {
                ...state,
                headers: action.payload.headers,
                body: action.payload.body,
                items: [
                    ...state.items,
                    ...action.payload.items
                ]
            }
        default:
            return state;
    }
};

export default search;