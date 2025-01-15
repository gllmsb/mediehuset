import React from 'react';
import styles from './Header.module.scss';

export const Header = ({ backgroundImage}) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </header>
  );
};
