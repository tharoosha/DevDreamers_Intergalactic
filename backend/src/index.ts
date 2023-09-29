import * as express from "express";
import { AppDataSource } from "./data-source";
import { AuthController } from "./auth/AuthController";
import { authMiddleware } from "./auth/middlewares/AuthMiddleware";
const dotenv = require("dotenv");
const cors = require("cors");

// routers
import tripRoutes from "./routes/trip.routes"
import regionRoutes from "./routes/region.routes"
import bookingRoutes from "./routes/booking.routes"

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
      res.send("Welcome to InterGalactic API!")
    })

    const authController = new AuthController()

    app.use("/trips", tripRoutes);
    app.use("/regions", regionRoutes)
    app.use("/booking", bookingRoutes);


    app.post("/login", authController.login);
    app.post("/register", authController.register);

    app.use(authMiddleware);

    const port = process.env.PORT || 8000;
    app.listen(port);

    console.log(`Express server has started on port ${port}`);
  })
  .catch((error) => console.log(error));
