import { Request, Response } from "express";
import { TripService } from "../services/TripService";
import { TripSearcObject } from "../interfaces/TripControllerObject";

export class TripController {
    private tripService: TripService;

    constructor() {
        this.tripService = new TripService();
    }

    public searchByTrip = async (request: Request, response: Response): Promise<void> => {
        try {

            const tripSearchObject: TripSearcObject = {
                fromRegion: String(request.query.from),
                toRegion: String(request.query.to),
                departureTime: (() => {
                    const dateString = String(request.query.date);
                    if (dateString === "undefined") {
                        return new Date();
                    }
                    return new Date(dateString);
                })()
            }
            const travelMode = request.query.travelMode;

            if (travelMode)
                tripSearchObject.spaceCraftTravelMode = String(travelMode);

            const availableTrips = await this.tripService.getTrips(tripSearchObject)

            response.json({ success: true, data: availableTrips })
        } catch (error) {
            response.status(500).send({ success: false, message: error.message });
        }
        return
    }

    public getTripById = async (request: Request, response: Response): Promise<void> => {
        try {
            const id = Number(request.params.id);

            const tripObj = await this.tripService.getTripById(id)
            response.json({ success: true, data: tripObj });
            return
        } catch (error) {
            console.log(error)
            response.status(500).send({ success: false, message: error.message });
        }
    }
}