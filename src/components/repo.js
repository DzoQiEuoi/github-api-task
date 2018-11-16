import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Readme from './readme';
import InfoBox from './infobox';
import { getRepo } from '../thunks/repos';
import { getReadme } from '../thunks/readmes';
import selectors from '../selectors';
import styles from './repo.scss';

const Repo = ({ owner, name, repo, readme, getRepo, getReadme}) => {
    useEffect(() => getRepo(owner, name), []);
    useEffect(() => repo && getReadme(repo), [repo]);

    return [
        repo
            ? (
                <div key="details" className={styles.details}>
                    <h2>{repo.full_name}</h2>
                    <InfoBox>Open Issues: {repo.open_issues_count}</InfoBox>
                    <InfoBox>Forks: {repo.forks_count}</InfoBox>
                    <InfoBox>Stars: {repo.stargazers_count}</InfoBox>
                </div>
            )
            : null,
        readme
            ? <Readme key="readme" readme={readme} />
            : null
    ];
};

const mapStateToProps = (state, ownProps) => {
    const [owner, name] = ownProps.location.pathname.split('/').slice(-2);
    return {
        owner,
        name,
        repo: selectors.repos.byFullName(state, `${owner}/${name}`),
        readme: selectors.readmes.byFullName(state, `${owner}/${name}`)
    }
};

const mapDispatchToProps = dispatch => ({
    getRepo: compose(dispatch, getRepo),
    getReadme: compose(dispatch, getReadme),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repo);