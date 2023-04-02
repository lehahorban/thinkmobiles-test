import { Router } from "express";
import { createClient } from "../controllers/client/createClient.js";
import { getClients } from "../controllers/client/getClients.js";
import { getClientById } from "../controllers/client/getClientById.js";
import { updateClient } from "../controllers/client/updateClient.js";
import { deleteClient } from "../controllers/client/deleteClient.js";
import { checkAuth } from "../uploads/checkAuth.js";

const router = new Router();

router.post("/client", checkAuth, createClient);
router.get("/clients", checkAuth, getClients);
router.get("/client/:id", getClientById);
router.put("/client/:id", updateClient);
router.delete("/client/:id", deleteClient);

export default router;
