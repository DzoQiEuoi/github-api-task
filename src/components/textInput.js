import React from 'react';
import styles from './textInput.scss';

const TextInput = ({ value, placeholder, onChange }) => (
    <input 
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)} />
);

export default TextInput;