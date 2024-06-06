import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../assets/style/ComponenteInput.module.css';

const ComponenteInput = ({ icon, type, placeholder, value, onChange }) => {
  return (
    <div className={styles['input-container']}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default ComponenteInput;
