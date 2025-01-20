import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/Logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { UserContext } from "../../context/UserContext";

export const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className={styles.navbar}>
      {/* logo */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Mediesuset Logo" />
        </Link>
      </div>

      {/* date */}
      <div className={styles.date}>
        <p>6-7. juli 2025</p>
      </div>

      {/* navigation links */}
      <ul className={styles.links}>
        <li><Link to="/">Forside</Link></li>

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

        {/* ff user is logged in, show "Min Side" with logout, otherwise show Login */}
        {user ? (
          <li className={styles.dropdown}>
            <Link to="/min-side">Min Side</Link>
            <ul className={styles.dropdownMenu}>
              <li>
                <button className={styles.logOutButton} onClick={logout}>
                  <IoIosLogOut className={styles.logOutIcon} /> Log ud
                </button>
              </li>
            </ul>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}

        {/* search icon */}
        <li><FaSearch className={styles.searchIcon} /></li>
      </ul>
    </nav>
  );
};
