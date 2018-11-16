import * as actionTypes from '../constants/actionTypes';

const initialState = {};

const readmes = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GOT_README:
            return {
                ...state,
                [action.payload.repo.full_name]: action.payload.readme
            };
        default:
            return state;
    }
};

export default readmes;