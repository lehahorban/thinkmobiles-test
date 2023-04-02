import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClient } from "../../redux/client/clientOperations";
import styles from "./ClientForm.module.css";
import { useSelector } from "react-redux";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const userId = useSelector((state) => state.auth.user._id);
  console.log(userId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formDataWithUserId = { ...formData, userId };
  //   console.log(formDataWithUserId);
  //   dispatch(createClient(formDataWithUserId));
  //   clearField();
  //   navigate("/");
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formDataWithUserId = { ...formData, user: userId };
  //   console.log(formDataWithUserId);
  //   dispatch(createClient(formDataWithUserId));
  //   clearField();
  //   navigate("/");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataWithUserId = { ...formData, userId };
    console.log(formDataWithUserId);
    dispatch(createClient(JSON.stringify(formDataWithUserId))); // оберните объект данных в JSON-строку
    clearField();
    navigate("/");
  };

  const clearField = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label className={styles.formLabel}>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.formInput}
        />
      </label>

      <label className={styles.formLabel}>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={styles.formInput}
        />
      </label>

      <button type="submit" className={styles.formButton}>
        Submit
      </button>
    </form>
  );
};

export default ClientForm;
