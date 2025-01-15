import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Logo from '../../assets/images/Logo.png';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Mediesuset Logo" />
        </Link>
      </div>

      <div className={styles.date}>
        <p>6-7. juli 2025</p>
      </div>

      <ul className={styles.links}>
        <li><Link to="/">Forside</Link></li>
        <li><Link to="/events">Program</Link></li>
        <li><Link to="/camps">Camps</Link></li>
        <li><Link to="/tickets">Billeter</Link></li>
        <li><Link to="/practical-info">Praktisk Info</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><FaSearch className={styles.searchIcon} /></li>
      </ul>
    </nav>
  );
};
