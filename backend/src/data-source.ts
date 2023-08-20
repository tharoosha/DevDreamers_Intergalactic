import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import * as dotenv from "dotenv";
import { Booking } from "./entity/Booking";
import { Planet } from "./entity/Planet";
import { Region } from "./entity/Region";
import { SpaceCraft } from "./entity/SpaceCraft";
import { SpaceCraftSection } from "./entity/SpaceCraftSection";
import { Trip } from "./entity/Trip";
import { Company } from "./entity/Company";
import { TripView } from "./entity/TripView";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.INTERGALACTIC_DB_URI,
  synchronize: true,
  logging: false,
  entities: [User, Booking, Planet, Region, SpaceCraft, SpaceCraftSection, Trip, Company, TripView],
  migrations: [],
  subscribers: [],
});
