import { Booking } from "src/booking/entities/booking.entity";
import { Review } from "src/review/entities/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    city: string;

    @Column()
    address: string;

    @Column()
    distance: number;

    @Column()
    price: number;

    @Column()
    maxGroupSize: number;

    @Column()
    desc: string;

    @Column()
    photo: string;

    @Column()
    featured: boolean;

    @OneToMany(() => Review, review => review.tour)
    reviews: Review[];

    @OneToMany(() => Booking, booking => booking.tour)
    booking: Booking[];
   
}
