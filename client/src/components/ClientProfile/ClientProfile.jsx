import { useState } from "react";
import styles from "./ClientProfile.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventById, deleteEvents } from "../../redux/event/eventOperations";
import { getClients } from "../../redux/client/clientOperations";
import Loading from "../Loading/Loading";

const ClientProfile = () => {
  const { clientId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sortField, setSortField] = useState("startDate");
  const [sortDirection, setSortDirection] = useState("asc");
  const isLoading = useSelector((state) => state.client.isLoading);

  const events = useSelector((state) => state.event.events)?.filter(
    (el) => el !== undefined
  );
  const clientsArray = useSelector((state) => state.client.clients);

  const userProfile = clientsArray.find((el) => el._id === clientId);

  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    dispatch(getEventById(clientId));
    dispatch(getClients());
  }, [dispatch, clientId]);

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formattedArr = events
    ?.map((item) => ({
      ...item,
      startDate: formatDate(item.startDate),
      endDate: formatDate(item.endDate),
    }))

    .sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (sortDirection === "asc") {
        return aVal.localeCompare(bVal, undefined, { numeric: true });
      } else {
        return bVal.localeCompare(aVal, undefined, { numeric: true });
      }
    });

  const handleCreateEvent = () => {
    navigate("/event", { state: { previousEventId: clientId } });
  };

  const handleSelectEvent = (id) => {
    if (selectedEvents.includes(id)) {
      setSelectedEvents(selectedEvents.filter((eventId) => eventId !== id));
    } else {
      setSelectedEvents([...selectedEvents, id]);
    }
  };

  const handleDeleteSelectedEvents = () => {
    dispatch(deleteEvents(selectedEvents));
    setSelectedEvents([]);
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedEvents = formattedArr?.sort((a, b) => {
    const direction = sortDirection === "asc" ? 1 : -1;

    if (sortField === "title") {
      return direction * a.title.localeCompare(b.title);
    } else if (sortField === "description") {
      return direction * a.description.localeCompare(b.description);
    } else if (sortField === "startDate") {
      return direction * (new Date(a.startDate) - new Date(b.startDate));
    } else if (sortField === "endDate") {
      return direction * (new Date(a.endDate) - new Date(b.endDate));
    } else {
      return 0;
    }
  });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(sortedEvents?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = sortedEvents?.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {userProfile && `${userProfile.firstName} ${userProfile.lastName}`}
      </h1>
      <table className={styles.tableProfile}>
        <thead>
          <tr>
            <th></th>
            <th onClick={() => handleSort("title")}>
              Title {sortField === "title" && sortDirection === "asc" && "▲"}
              {sortField === "title" && sortDirection === "desc" && "▼"}
            </th>
            <th onClick={() => handleSort("description")}>
              Description{" "}
              {sortField === "description" && sortDirection === "asc" && "▲"}
              {sortField === "description" && sortDirection === "desc" && "▼"}
            </th>
            <th onClick={() => handleSort("startDate")}>
              Start date{" "}
              {sortField === "startDate" && sortDirection === "asc" && "▲"}
              {sortField === "startDate" && sortDirection === "desc" && "▼"}
            </th>
            <th onClick={() => handleSort("endDate")}>
              End date{" "}
              {sortField === "endDate" && sortDirection === "asc" && "▲"}
              {sortField === "endDate" && sortDirection === "desc" && "▼"}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData?.length === 0
            ? ""
            : currentData?.map((event) => (
                <tr key={event._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedEvents.includes(event._id)}
                      onChange={() => handleSelectEvent(event._id)}
                    />
                  </td>
                  <td>{event.title}</td>
                  <td>{event.description}</td>
                  <td>{event.startDate}</td>
                  <td>{event.endDate}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <div className={styles.buttonWrapp}>
        <div className={styles.paginateWrapp}>
          <button
            className={styles.paginateBtn}
            onClick={handlePrevClick}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: maxPage }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                className={`${styles.paginateBtnNumber} ${
                  pageNumber === currentPage && styles.currentPage
                }`}
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                disabled={pageNumber === currentPage}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className={styles.paginateBtn}
            onClick={handleNextClick}
            disabled={currentPage === maxPage}
          >
            Next
          </button>
        </div>
        {selectedEvents.length > 0 && (
          <button
            onClick={handleDeleteSelectedEvents}
            className={styles.deleteButton}
          >
            Delete selected events
          </button>
        )}
        <button onClick={handleCreateEvent} className={styles.createButton}>
          Create Event
        </button>
      </div>
    </div>
  );
};

export default ClientProfile;
