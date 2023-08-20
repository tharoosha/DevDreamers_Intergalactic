import { Request, Response } from "express";
import BookingService from "../services/BookingService";
import BookingObject from "../interfaces/BookingControllerObject";
import { SectionType } from "../enums/SectionType";

export default class BookingController {
    private bookingService: BookingService;

    constructor() {
        this.bookingService = new BookingService();
    }

    public getBookingsByUserId = async (request: Request, response: Response) => {
        try {
            const userId = Number(request.userObj.id)

            const bookings = await this.bookingService.getBookingsByUserId(userId)
            response.json({ success: true, data: bookings });
        } catch (error) {
            response.status(500).send({ success: false, message: error.message });
        }
        return
    }

    public makeBooking = async (request: Request, response: Response) => {
        try {
            const tripId = Number(request.params.tripId)
            const spaceCraftId = Number(request.params.spaceCraftId)

            const firstClassSeats = Number(request.body.first)
            const economyClassSeats = Number(request.body.economy)
            const businessClassSeats = Number(request.body.business)

            const bookingObj: BookingObject = {
                tripId,
                spaceCraftId,
                classes: []
            }

            if (firstClassSeats > 0)
                bookingObj.classes.push({ class: SectionType.FIRST, seats: firstClassSeats })

            if (economyClassSeats > 0)
                bookingObj.classes.push({ class: SectionType.ECONOMY, seats: economyClassSeats })

            if (businessClassSeats > 0)
                bookingObj.classes.push({ class: SectionType.BUSINESS, seats: businessClassSeats })


            response.json(await this.bookingService.makeBooking(bookingObj));
        } catch (error) {
            console.log(error)
        }

        return
    }
};
