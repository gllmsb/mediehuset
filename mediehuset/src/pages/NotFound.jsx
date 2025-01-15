import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Siden blev ikke fundet</h1>
      <p>Ups! Den side, du leder efter, findes ikke.</p>
      <Link to="/">Gå tilbage til forsiden</Link>
    </div>
  );
};

export default NotFound;
