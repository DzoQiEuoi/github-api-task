import React from 'react';
import styles from './button.scss';

const Button = ({ children, onClick }) => (
    <button className={styles.button} onClick={onClick || null}>
        {children}
    </button>
);

export default Button;