import { Router } from "express";
import { register } from "../controllers/auth/register.js";
import { login } from "../controllers/auth/login.js";
import { current } from "../controllers/auth/current.js";
import { logout } from "../controllers/auth/logout.js";
import { update } from "../controllers/auth/update.js";
import { checkAuth } from "../uploads/checkAuth.js";

const router = new Router();

// register
router.post("/register", register);

// login
router.post("/login", login);

// current
router.get("/current", checkAuth, current);

// logout
router.delete("/:id", logout);

router.put("/:id", update);

export default router;
