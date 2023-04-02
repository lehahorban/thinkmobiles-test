import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClientTablePage from "../../Page/ClientTablePage/ClientTablePage";
import { getClients } from "../../redux/client/clientOperations";
import { getEvents } from "../../redux/event/eventOperations";
import { checkIsAuth } from "../../redux/auth/authSelector";

const ClientTable = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(checkIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      dispatch(getClients());
      dispatch(getEvents());
    }
  }, [dispatch, isAuth, navigate]);

  const clientsArray = useSelector((state) => state.client.clients);
  const eventsArray = useSelector((state) => state.event.events);

  return (
    <>
      {isAuth && (
        <ClientTablePage
          clientsArray={clientsArray}
          eventsArray={eventsArray}
        />
      )}
    </>
  );
};

export default ClientTable;
