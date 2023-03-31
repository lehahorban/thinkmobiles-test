import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientTablePage from "../../Page/ClientTablePage/ClientTablePage";
import { getClients } from "../../redux/client/clientOperations";
import { getEvents } from "../../redux/event/eventOperations";

const ClientTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
    dispatch(getEvents());
  }, [dispatch]);

  const clientsArray = useSelector((state) => state.client.clients);
  const eventsArray = useSelector((state) => state.event.events);

  return (
    <>
      <ClientTablePage clientsArray={clientsArray} eventsArray={eventsArray} />
    </>
  );
};

export default ClientTable;
