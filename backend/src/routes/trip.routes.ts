import { Router } from 'express'
import { TripController } from '../controller/TripController'


const router = Router()

const tripController = new TripController()

router.route("/")
    .get(tripController.searchByTrip)

router.route("/:id")
    .get(tripController.getTripById)

export default router