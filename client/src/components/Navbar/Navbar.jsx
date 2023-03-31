import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
        </li>
        {/* <li className={styles.navbarItem}>
          <NavLink
            to="/client"
            className={styles.navbarLink}
            activeClassName={styles.active}
          >
            Client
          </NavLink>
        </li> */}
        <li className={styles.navbarItem}>
          <NavLink
            to="/register"
            className={styles.navbarLink}
            activeclassname={styles.active}
          >
            Register
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/login"
            className={styles.navbarLink}
            activeclassname={styles.active}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
