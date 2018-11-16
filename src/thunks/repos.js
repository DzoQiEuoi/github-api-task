import parser from 'uri-template';
import { compose } from 'redux';
import { gotRepo } from '../actions/repos';
import { REPOSITORY } from '../constants/urlTemplates';
import selectors from '../selectors';

export const getRepo = (owner, repo) => (dispatch, getState) => {
    const template = selectors.urls.byName(getState(), REPOSITORY);
    const url = parser.parse(template).expand({ repo, owner });
    const dispatchPayload = compose(dispatch, gotRepo);
    return fetch(url).then(res => res.json()).then(dispatchPayload);
};