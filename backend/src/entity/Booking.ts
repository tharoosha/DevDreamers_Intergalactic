import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { SpaceCraftSection } from "./SpaceCraftSection";
import { Trip } from "./Trip";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bookedSeats: number;

    @ManyToOne(() => User, (user) => user.bookings)
    user: User;

    @ManyToOne(() => SpaceCraftSection, (spaceCraftSection) => spaceCraftSection.bookings)
    spaceCraftSection: SpaceCraftSection;

    @ManyToOne(() => Trip, (trip) => trip.bookings)
    trip: Trip;

}