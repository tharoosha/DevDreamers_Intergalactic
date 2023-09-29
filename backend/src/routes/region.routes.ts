import { Router } from "express";
import { RegionController } from "../controller/RegionController";

const router = Router()

const regionController = new RegionController()

router.route("/").get(regionController.all)


export default router