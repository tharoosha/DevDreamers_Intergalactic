import { Repository } from "typeorm";
import { Booking } from "../entity/Booking";
import { AppDataSource } from "../data-source";
import BookingObject from "../interfaces/BookingControllerObject";

export class BookingRepository {
    private bookingRepository: Repository<Booking>

    constructor() {
        this.bookingRepository = AppDataSource.getRepository(Booking);
    }

    public getBookingsByUserId = async (userId: number): Promise<Booking[]> => {
        return await this.bookingRepository.find({
            where: {
                user: {
                    id: userId
                }
            },
            relations: ["trip", "trip.fromRegion", "trip.toRegion", "trip.spaceCraft", "trip.company", "spaceCraftSection", "spaceCraftSection.spaceCraft", "spaceCraftSection.spaceCraft.spaceCraftType"]
        });
    }


    public makeBooking = async (bookingObject: BookingObject): Promise<void> => {

        const queryRunner = await AppDataSource.createQueryRunner()

        await queryRunner.connect()

        await queryRunner.startTransaction()

        try {
            for (const bookingClass of bookingObject.classes) {

                // get the space craft section
                const spaceCraftSection = await queryRunner.manager
                    .createQueryBuilder()
                    .select("spaceCraftSection")
                    .from("space_craft_section", "spaceCraftSection")
                    .where("spaceCraftSection.spacecraftId = :spaceCraftId", { spaceCraftId: bookingObject.spaceCraftId })
                    .andWhere("spaceCraftSection.class = :class", { class: bookingClass.class })
                    .getOne()

                // insert each record into the booking table
                await queryRunner.manager
                    .createQueryBuilder()
                    .insert()
                    .into(Booking)
                    .values({
                        trip: {
                            id: bookingObject.tripId
                        },
                        spaceCraftSection: {
                            id: spaceCraftSection.id,
                            class: bookingClass.class,
                            spacecraft: {
                                id: bookingObject.spaceCraftId,
                            },
                        },
                        bookedSeats: bookingClass.seats,
                        user: {
                            id: 1
                        },
                    })
                    .execute()
            }

            await queryRunner.commitTransaction()
        } catch (error) {
            console.log(error)
        } finally {
            queryRunner.release()
        }

    }

    private makeClassBooking = async (tripId: number, spaceCraftSection): Promise<void> => {
        const insertResult = await this.bookingRepository
            .createQueryBuilder()
            .insert()
            .into(Booking)
            .values({
                bookedSeats: spaceCraftSection.seatCount,
                spaceCraftSection: {
                    id: spaceCraftSection.id
                },
                trip: {
                    id: tripId
                }
            })
            .execute()

        console.log(insertResult)
        return
    }
}