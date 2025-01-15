import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Logo from '../../assets/images/Logo.png';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Mediesuset Logo" />
        </Link>
      </div>

      {/* Date */}
      <div className={styles.date}>
        <p>6-7. juli 2025</p>
      </div>

      {/* Navigation Links */}
      <ul className={styles.links}>
        <li><Link to="/">Forside</Link></li>

        {/* Dropdown for Events */}
        <li className={styles.dropdown}>
          <span>Events</span>
          <ul className={styles.dropdownMenu}>
            <li><Link to="/line-up">Line-Up</Link></li>
            <li><Link to="/program">Program</Link></li>
          </ul>
        </li>

        <li><Link to="/camps">Camps</Link></li>
        <li><Link to="/tickets">Billeter</Link></li>
        <li><Link to="/practical-info">Praktisk Info</Link></li>
        <li><Link to="/login">Login</Link></li>

        {/* Search Icon */}
        <li><FaSearch className={styles.searchIcon} /></li>
      </ul>
    </nav>
  );
};
