import { MoreThan, Repository } from "typeorm";
import { TripView } from "../entity/TripView";
import { AppDataSource } from "../data-source";
import { TripSearcObject } from "../interfaces/TripControllerObject";

export class TripViewRepository {
    private tripViewRepository: Repository<TripView>;

    constructor() {
        this.tripViewRepository = AppDataSource.getRepository(TripView);
    }

    public async getTrips(tripSearchObject: TripSearcObject): Promise<TripView[]> {

        return await this.tripViewRepository.find({
            where: {
                ...tripSearchObject,
                departureTime: MoreThan(tripSearchObject.departureTime)
            }
        });
    }
}