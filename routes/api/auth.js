import express from "express";
import {register, updateAvatar} from "../../controllers/auth.js";
import {login} from "../../controllers/auth.js";
import {getCurrent} from "../../controllers/auth.js";
import {logout} from "../../controllers/auth.js";
import { updateUserSubscription } from "../../controllers/auth.js";
import  authenticate  from "../../middlevares/authenticate.js"
import validateBody from "../../middlevares/validateBody.js";
import upload from "../../middlevares/upload.js";
import { registerSchema, loginSchema, updateSubscriptionSchema}from "../../models/user.js"

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(loginSchema), login);
authRouter.get("/current", authenticate, getCurrent);
authRouter.post("/logout", authenticate, logout);
authRouter.patch("/", authenticate, validateBody(updateSubscriptionSchema), updateUserSubscription);
authRouter.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

export default authRouter;
