import * as actionTypes from '../constants/actionTypes';

export const gotSearchResults = ({ headers, body = {} }) => ({
    type: actionTypes.GOT_SEARCH_RESULTS,
    payload: {
        headers,
        body,
        items: Array.isArray(body.items) ? body.items : []
    }
});

export const gotMoreSearchResults = ({ headers, body = {} }) => ({
    type: actionTypes.GOT_MORE_SEARCH_RESULTS,
    payload: {
        headers,
        body,
        items: Array.isArray(body.items) ? body.items : []
    }
});