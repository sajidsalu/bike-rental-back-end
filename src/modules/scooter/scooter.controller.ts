import { Request, Response } from "express";
import { ScooterService } from "./scooter.service";

export const addScooter = async (req: Request, res: Response) => {
  const scooter = await ScooterService.addScooter(req.body);
  res.status(201).json(scooter);
};

export const listScooters = async (req: Request, res: Response) => {
  const scooters = await ScooterService.listAllScooters();
  res.json(scooters);
};

export const listAvailableScooters = async (req: Request, res: Response) => {
  const scooters = await ScooterService.listAvailableScoooters();
  res.json(scooters);
};
