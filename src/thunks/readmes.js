import parser from 'uri-template';
import { compose } from 'redux';
import { gotReadme } from '../actions/readmes';
import { REPOSITORY } from '../constants/urlTemplates';
import { README_SUFFIX } from '../constants/endpoints';
import selectors from '../selectors';

export const getReadme = repo => (dispatch, getState) => {
    const { owner: { login }, name } = repo;
    const template = selectors.urls.byName(getState(), REPOSITORY);
    const repoUrl = parser.parse(template).expand({ owner: login, repo: name });
    const dispatchPayload = compose(dispatch, gotReadme.bind(undefined, repo));
    return fetch(`${repoUrl}${README_SUFFIX}`).then(res => res.json()).then(dispatchPayload);
};