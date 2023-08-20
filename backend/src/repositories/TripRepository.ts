import { Repository } from "typeorm";
import { Trip } from "../entity/Trip";
import { AppDataSource } from "../data-source";

export class TripRepository {
    private tripRepository: Repository<Trip>;

    constructor() {
        this.tripRepository = AppDataSource.getRepository(Trip);
    }

    public getTripById = async (id: number): Promise<Trip> => {
        return await this.tripRepository.findOne({
            where: {
                id
            },
            relations: {
                fromRegion: true,
                toRegion: true,
                spaceCraft: {
                    sections: true,
                }
            }
        });
    }
}