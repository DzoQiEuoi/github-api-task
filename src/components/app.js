import React, { useEffect, useState } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { getUrls } from '../thunks/urls';
import Search from './search';
import Repo from './repo';
import styles from './app.scss';

const App = ({ getUrls }) => {
    const [hide, setHide] = useState(true);
    
    useEffect(
        () => getUrls().then(() => setHide(false)),
    []);

    return hide ? null : (
        <Router>
            <div className={styles.container}>
                <Link to={{ pathname: '/search' }}>
                    <h1 className={styles.header}>GitHub Search</h1>
                </Link>
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/search' component={Search} />
                    <Route path='/repo' component={Repo} />
                </Switch>
            </div>
        </Router>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    getUrls: compose(dispatch, getUrls)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)