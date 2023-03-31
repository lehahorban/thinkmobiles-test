import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./App.module.css";
import RoutesApp from "../../Routes/Routes";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <RoutesApp />
    </div>
  );
};

export default App;
