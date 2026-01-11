import { Router } from "express";
import {
  addScooter,
  listScooters,
  listAvailableScooters,
} from "./scooter.controller";

import { authenticate } from "../../middlewares/authenticate.middleware";
import { authorize } from "../../middlewares/authorize.middleware";

const router = Router();

// Public
router.get("/scooters/available", listAvailableScooters);

// Admin
router.post("/admin/scooters", authenticate, authorize(["ADMIN"]), addScooter);

router.get("/admin/scooters", authenticate, authorize(["ADMIN"]), listScooters);

export default router;
