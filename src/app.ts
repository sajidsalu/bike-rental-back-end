import express from "express";
import cors from "cors";
import helmet from "helmet";

import healthRoutes from "./modules/health/health.routes";
import authRoutes from "./modules/auth/auth.routes";
import scooterRoutes from "./modules/scooter/scooter.routes";
import bookingRoutes from "./modules/booking/booking.routes";

import { requestIdMiddleware } from "./middlewares/requestId.middleware";
import { requestLogger } from "./middlewares/requestLogger.middleware";
import { errorHandler } from "./middlewares/error.middleware";

import "./subcribers/bookingCreated.subscriber";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Custom middlewares
app.use(requestIdMiddleware);
app.use(requestLogger);
// app.use(authMiddleware)

//register routes
app.use(healthRoutes);
app.use(authRoutes);
app.use("/api", scooterRoutes);
app.use("/api", bookingRoutes);

//global error handler
app.use(errorHandler);
