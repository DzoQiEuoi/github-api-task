import { combineReducers } from 'redux';
import readmes from './readmes';
import repos from './repos';
import search from './search';
import urls from './urls';

const reducer = combineReducers({
    readmes,
    repos,
    search,
    urls
});

export default reducer;