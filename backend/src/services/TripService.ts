import { TripSearcObject } from "../interfaces/TripControllerObject";
import { TripRepository } from "../repositories/TripRepository";
import { TripViewRepository } from "../repositories/TripViewRepository";

export class TripService {
    private tripViewRepository: TripViewRepository;
    private tripRepository: TripRepository;

    constructor() {
        this.tripViewRepository = new TripViewRepository();
        this.tripRepository = new TripRepository();
    }

    public async getTrips(tripSearchObject: TripSearcObject) {
        return await this.tripViewRepository.getTrips(tripSearchObject);
    }

    public async getTripById(id: number) {
        return await this.tripRepository.getTripById(id);
    }
}