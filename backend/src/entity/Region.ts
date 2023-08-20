import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Planet } from "./Planet";
import { Trip } from "./Trip";

@Entity()
export class Region {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Planet, (planet) => planet.regions)
    planet: Planet;

    @OneToMany(() => Trip, (trip) => trip.fromRegion)
    fromTrips: Trip[];

    @OneToMany(() => Trip, (trip) => trip.toRegion)
    toTrips: Trip[];
}