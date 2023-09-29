import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  firstname: string;

  @Column({
    nullable: false
  })
  lastname: string;

  @Column({
    nullable: false
  })
  email: string;

  @Column({
    nullable: false
  })
  password: string;

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];

  constructor(firstname: string, lastname: string, email: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}
