import { compose } from 'redux';
import { gotUrls } from '../actions/urls';
import { GITHUB_API_ENPOINT } from '../constants/endpoints';

export const getUrls = () => dispatch => {
    const dispatchPayload = compose(dispatch, gotUrls);
    return fetch(GITHUB_API_ENPOINT).then(res => res.json()).then(dispatchPayload);
};