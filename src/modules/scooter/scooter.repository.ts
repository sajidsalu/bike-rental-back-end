import { Scooter, ScooterStatus } from "./scooter.model";

export const ScooterRepository = {
  create(data: any) {
    return Scooter.create(data);
  },

  findById(id: string) {
    return Scooter.findById(id);
  },

  findAll() {
    return Scooter.find({ isActive: true });
  },

  findAvailable() {
    return Scooter.find({
      status: ScooterStatus.AVAILABLE,
      isActive: true,
    });
  },

  updateStatus(id: string, status: ScooterStatus) {
    return Scooter.findByIdAndUpdate(id, { status }, { new: true });
  },
};
