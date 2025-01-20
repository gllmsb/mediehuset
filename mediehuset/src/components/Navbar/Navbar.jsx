import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/Logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Added icons
import { UserContext } from "../../context/UserContext";

export const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Navigation Links for Desktop */}
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

        {/* Show "Min Side" when logged in, otherwise show "Login" */}
        {user ? (
          <li>
            <Link to="/minside">Min Side</Link>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}

        {/* Search Icon */}
        <li><FaSearch className={styles.searchIcon} /></li>
      </ul>

      {/* Burger Menu for Mobile */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Forside</Link>
        <Link to="/line-up" onClick={() => setMenuOpen(false)}>Line-Up</Link>
        <Link to="/program" onClick={() => setMenuOpen(false)}>Program</Link>
        <Link to="/camps" onClick={() => setMenuOpen(false)}>Camps</Link>
        <Link to="/tickets" onClick={() => setMenuOpen(false)}>Billeter</Link>
        <Link to="/practical-info" onClick={() => setMenuOpen(false)}>Praktisk Info</Link>

        {user ? (
          <>
            <Link to="/min-side" onClick={() => setMenuOpen(false)}>Min Side</Link>
            <button className={styles.logOutButton} onClick={() => { logout(); setMenuOpen(false); }}>
              Log ud
            </button>
          </>
        ) : (
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        )}
      </div>
    </nav>
  );
};
