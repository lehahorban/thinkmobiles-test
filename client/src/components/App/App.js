import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import styles from "./App.module.css";
import RoutesApp from "../../Routes/Routes";
import { currentUser } from "../../redux/auth/authOperations";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <RoutesApp />
    </div>
  );
};

export default App;
