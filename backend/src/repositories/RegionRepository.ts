import { Repository } from "typeorm";
import { Region } from "../entity/Region";
import { AppDataSource } from "../data-source";

export class RegionRepository {
    private regionRepository: Repository<Region>;

    constructor() {
        this.regionRepository = AppDataSource.getRepository(Region);
    }

    public async getAllRegions(): Promise<Region[]> {

        const result = await this.regionRepository
            .createQueryBuilder('region')
            .leftJoinAndSelect("region.planet", "planet")
            .select(["region.id", "region.name", "planet.id", "planet.name"])
            .getRawMany();

        return result
    }


}