import React, { useState } from "react";
import styles from "./EventPage.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const EventPage = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const location = useLocation();
  const clientId = location.state?.previousEventId;
  const events = useSelector((state) => state.event.events);
  // console.log(events);
  const filterData = events?.filter((el) => {
    const eventStartDate = new Date(el.startDate);
    const eventEndDate = new Date(el.endDate);
    const selectedStartDate = new Date(startDate);
    const selectedEndDate = new Date(endDate);
    return (
      (selectedStartDate >= eventStartDate &&
        selectedStartDate <= eventEndDate) ||
      (selectedEndDate >= eventStartDate && selectedEndDate <= eventEndDate) ||
      (selectedStartDate <= eventStartDate && selectedEndDate >= eventEndDate)
    );
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = { title, description, startDate, endDate, clientId };

    if (filterData?.length > 0) {
      alert("You can’t create event for this time");
      return;
    }
    if (Object.values(formData).includes(undefined || "")) {
      alert("The field cannot be empty");
      return;
    } else {
      handleSubmit(formData, clientId);
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    }
  };

  return (
    <form className={styles.eventForm} onSubmit={onFormSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="startDate">Start date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="endDate">End date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default EventPage;
