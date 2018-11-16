import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './button';
import TextInput from './textInput';
import InfoBox from './infobox';
import { getSearchResults, getMoreSearchResults } from '../thunks/search';
import selectors from '../selectors/index';
import styles from './search.scss';

const Search = ({ search, more, results, isMore }) => {
    const [searchTerm, updateSearchTerm] = useState('');

    return [
        <div key="search-bar" className={styles.centralise}>
            <TextInput
                placeholder="Search for a repository..."
                value={searchTerm}
                onChange={updateSearchTerm} />
            <Button onClick={() => search(`${searchTerm} in:name`)}>
                Search
            </Button>
        </div>,
        <ul key="result-list" className={styles.resultList}>
            { results.map(result => 
                <li key={result.id} className={styles.resultItem}>
                    <Link to={{ pathname: `/repo/${result.full_name}` }}>
                        <Button>{result.full_name}</Button>
                    </Link>
                    <InfoBox>
                        &#x2B50;&nbsp;{result.stargazers_count}
                    </InfoBox>
                </li>
            )}
        </ul>,
        <div key="more" className={styles.centralise}>
            { isMore
                ? <Button onClick={more}>more</Button>
                : null
            }
        </div>
    ];
}

const mapStateToProps = state => ({
    results: selectors.search.all(state),
    isMore: !!selectors.search.nextUrl(state),
    state
});

const mapDispatchToProps = dispatch => ({
    search: searchTerm => dispatch(getSearchResults(searchTerm)),
    more: url => dispatch(getMoreSearchResults(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);