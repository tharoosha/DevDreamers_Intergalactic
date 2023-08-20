import { RegionRepository } from "../repositories/RegionRepository";

export class RegionService {
    private regionRepository: RegionRepository;

    constructor() {
        this.regionRepository = new RegionRepository();
    }
    public async getAllRegions() {
        return await this.regionRepository.getAllRegions();
    }
}
