import { Router } from "express";
import { createEvent } from "../controllers/event/creareEvent.js";
import { getEvents } from "../controllers/event/getEvents.js";
// import { getEventById } from "../controllers/event/getEventById.js";
import { updateEvent } from "../controllers/event/updateEvent.js";
import { deleteEvent } from "../controllers/event/deleteEvent.js";
import { getClientEvents } from "../controllers/event/getEventById.js";

const router = new Router();

router.post("/event", createEvent);
router.get("/events", getEvents);
// router.get("/event/:id", getEventById);
router.get("/event/:clientId", getClientEvents);
router.patch("/event/:clientId", updateEvent);
// router.delete("/event/:eventId", deleteEvent);

router.delete("/event", deleteEvent);

export default router;
