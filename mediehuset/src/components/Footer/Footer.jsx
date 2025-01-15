import React, { useState } from 'react';
import styles from './Footer.module.scss';
import { FiMail } from 'react-icons/fi';
import HancockLogo from '../../assets/images/Hancock_logo.png';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email er påkrævet');
    } else if (!emailRegex.test(email)) {
      setError('Indtast en gyldig emailadresse');
    } else {
      setError('');
      alert('Tak for din tilmelding!');
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h3>Tilmeld Nyhedsbrev</h3>
        <p>Få de seneste nyheder sendt til din indbakke</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <FiMail className={styles.icon} />
            <input
              type="email"
              placeholder="Indtast emailadresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Tilmeld</button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <img src={HancockLogo} alt="Hancock Kvalitet" className={styles.logo} />
      </div>
    </footer>
  );
};
