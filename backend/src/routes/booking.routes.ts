import { Router } from "express";
import BookingController from "../controller/BookingController";

const router = Router();

const bookingController = new BookingController();

router.route("/:tripId/:spaceCraftId").post(bookingController.makeBooking);

export default router