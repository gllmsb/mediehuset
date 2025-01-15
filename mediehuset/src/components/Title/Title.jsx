import React from 'react';
import styles from './Title.module.scss';

export const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
    </div>
  );
};
