import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Region } from "./Region";
import { SpaceCraft } from "./SpaceCraft";
import { Booking } from "./Booking";
import { Company } from "./Company";

@Entity()
export class Trip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    departureTime: Date;

    @Column()
    basePrice: number;

    @ManyToOne(() => SpaceCraft, (spaceCraft) => spaceCraft.trips)
    spaceCraft: SpaceCraft;

    @ManyToOne(() => Region, (region) => region.fromTrips)
    fromRegion: Region;

    @ManyToOne(() => Region, (region) => region.toTrips)
    toRegion: Region;

    @OneToMany(() => Booking, (booking) => booking.trip)
    bookings: Booking[];

    @ManyToOne(() => Company, (company) => company.trip)
    company: Company;

}
