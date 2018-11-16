import * as actionTypes from '../constants/actionTypes';

export const gotRepo = payload => ({
    type: actionTypes.GOT_REPO,
    payload
});