import * as actionTypes from '../constants/actionTypes';

const initialState = {};

const repos = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GOT_REPO:
            return {
                ...state,
                [action.payload.full_name]: action.payload
            };
        default:
            return state;
    }
}

export default repos;