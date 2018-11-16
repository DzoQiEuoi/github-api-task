import * as actionTypes from '../constants/actionTypes';

const initialState = {};

const urls = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GOT_URLS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default urls;