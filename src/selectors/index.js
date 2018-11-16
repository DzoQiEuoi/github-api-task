import combineSelectors from '../utils/combineSelectors';
import * as readmes from './readmes';
import * as repos from './repos';
import * as search from './search';
import * as urls from './urls';

const selectors = combineSelectors({
    readmes,
    repos,
    search,
    urls
});

export default selectors;