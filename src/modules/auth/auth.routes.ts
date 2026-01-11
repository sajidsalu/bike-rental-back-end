import { Router } from "express";

import { login, register } from "./auth.controller";
import { authenticate } from "../../middlewares/authenticate.middleware";
import { authorize } from "../../middlewares/authorize.middleware";

const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", login);

router.get("/admin/test", authenticate, authorize(["ADMIN"]), (req, res) => {
  res.json({ message: "Admin access granted" });
});

export default router;
