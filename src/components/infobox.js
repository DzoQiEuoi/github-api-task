import React from 'react';
import styles from './infobox.scss';

const InfoBox = ({ children }) => (
    <div className={styles.box}>
        {children}
    </div>
);

export default InfoBox;