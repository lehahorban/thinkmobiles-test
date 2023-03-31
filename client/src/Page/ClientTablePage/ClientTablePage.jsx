import React, { useState, useEffect, useCallback } from "react";
import styles from "./ClientTablePage.module.css";
import { NavLink } from "react-router-dom";

const ClientTablePage = ({ clientsArray, eventsArray }) => {
  const [eventCounts, setEventCounts] = useState({});

  const updateEventCounts = useCallback(() => {
    const counts = {};
    eventsArray.forEach((event) => {
      if (counts[event.clientId]) {
        counts[event.clientId]++;
      } else {
        counts[event.clientId] = 1;
      }
    });

    setEventCounts(counts);
  }, [eventsArray]);

  useEffect(() => {
    updateEventCounts();
  }, [updateEventCounts]);

  const getNextEventDate = (clientId) => {
    const clientEvents = eventsArray
      .filter((event) => event.clientId === clientId)
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    if (clientEvents.length > 0) {
      return new Date(clientEvents[0].startDate).toLocaleDateString();
    } else {
      return "";
    }
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Events count</th>
            <th>Next event date</th>
          </tr>
        </thead>
        <tbody>
          {clientsArray.length > 0 &&
            clientsArray
              // .slice()
              // .sort((a, b) => b.firstName.localeCompare(a.firstName))
              .map((el) => (
                <tr key={el._id}>
                  <td>
                    <NavLink
                      className={styles.link}
                      to={`/event/${el._id}`}
                    >{`${el.firstName} ${el.lastName}`}</NavLink>
                  </td>
                  <td>{el.email}</td>
                  <td>{el.phoneNumber}</td>
                  <td>{eventCounts[el._id] || 0}</td>
                  <td>{getNextEventDate(el._id)}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <NavLink to="/client" className={styles.createEventButton}>
        Create User
      </NavLink>
    </div>
  );
};

export default ClientTablePage;
