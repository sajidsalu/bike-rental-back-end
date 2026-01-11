import { ScooterRepository } from "./scooter.repository";
import { Scooter, ScooterStatus } from "./scooter.model";

export const ScooterService = {
  async addScooter(data: any) {
    return ScooterRepository.create(data);
  },

  async listAllScooters() {
    return ScooterRepository.findAll();
  },

  async listAvailableScoooters() {
    return ScooterRepository.findAvailable();
  },

  async markOnRoad(scooterId: string) {
    return ScooterRepository.updateStatus(scooterId, ScooterStatus.ON_ROAD);
  },
};
