import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { checkIsAuth } from "../../redux/auth/authSelector";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);
  const userName = useSelector((state) => state.auth.user?.name);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
        </li>

        <li className={styles.navbarItem}>
          {isAuth ? (
            <div className={styles.usernameWrapp}>
              <h2>
                <span className={styles.usernameSpan}>Welcome </span> {userName}
              </h2>
            </div>
          ) : (
            <NavLink
              to="/register"
              className={styles.navbarLink}
              activeclassname={styles.active}
            >
              Register
            </NavLink>
          )}
        </li>
        <li className={styles.navbarItem}>
          {isAuth ? (
            <button
              onClick={() => {
                dispatch(logout());
              }}
              type="button"
              className={styles.navbarLink}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={styles.navbarLink}
              activeclassname={styles.active}
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
