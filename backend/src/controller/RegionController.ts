import { Request, Response } from "express";
import { RegionService } from "../services/RegionService";

export class RegionController {
    private regionService: RegionService;

    constructor() {
        this.regionService = new RegionService();
    }

    public all = async (request: Request, response: Response) => {
        try {
            response.json(await this.regionService.getAllRegions())
        } catch (error) {
            console.log(error)
        }
    }
}