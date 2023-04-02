import { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/authOperations";
import { checkIsAuth } from "../../redux/auth/authSelector";

const LoginPage = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [dispatch, isAuth, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, password };
    dispatch(loginUser(userData));
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.auth}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
