import parser from 'uri-template';
import { compose } from 'redux';
import { REPOSITORY_SEARCH } from '../constants/urlTemplates';
import { gotSearchResults, gotMoreSearchResults } from '../actions/search';
import selectors from '../selectors';

const toPayload = res => new Promise(resolve => {
    res.json().then(body => {
        const headers = Object.fromEntries(res.headers.entries());
        resolve({ headers, body });
    });
});

export const getSearchResults = query => (dispatch, getState) => {
    const template = selectors.urls.byName(getState(), REPOSITORY_SEARCH);
    const url = parser.parse(template).expand({ query });
    const dispatchPayload = compose(dispatch, gotSearchResults);
    return fetch(url).then(toPayload).then(dispatchPayload);
};

export const getMoreSearchResults = () => (dispatch, getState) => {
    const nextPage = selectors.search.nextUrl(getState());
    const dispatchPayload = compose(dispatch, gotMoreSearchResults);
    return fetch(nextPage).then(toPayload).then(dispatchPayload);
};