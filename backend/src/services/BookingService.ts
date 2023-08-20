import { Booking } from "../entity/Booking";
import { SpaceCraftSection } from "../entity/SpaceCraftSection";
import { Trip } from "../entity/Trip";
import BookingObject from "../interfaces/BookingControllerObject";
import { BookingRepository } from "../repositories/BookingRepository";
import { TripService } from "./TripService";

export default class BookingService {
    private bookingRepository: BookingRepository;

    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    public getBookingsByUserId = async (userId: number): Promise<Booking[]> => {
        return await this.bookingRepository.getBookingsByUserId(userId);
    }

    public makeBooking = async (bookingObj: BookingObject): Promise<void> => {

        console.log(bookingObj)
        return await this.bookingRepository.makeBooking(bookingObj);
    }
};
