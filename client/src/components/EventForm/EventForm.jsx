import { useDispatch } from "react-redux";
import { createEvent } from "../../redux/event/eventOperations";
import { useNavigate } from "react-router-dom";

import EventPage from "../../Page/EventPage/EventPage";

const EventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data, clientId) => {
   

    dispatch(createEvent(data));
    navigate(`/event/${clientId}`);
  };

  return <EventPage handleSubmit={handleSubmit} />;
};

export default EventForm;
