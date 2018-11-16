import * as actionTypes from '../constants/actionTypes';

export const gotReadme = (repo, readme) => ({
    type: actionTypes.GOT_README,
    payload: {
        repo,
        readme
    }
});