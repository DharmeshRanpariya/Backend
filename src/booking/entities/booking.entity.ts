import { Tour } from "src/tour/entities/tour.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    "fullName": string;
    
    @Column()
    "guestSize": number;

    @Column()
    "phone": number;

    @Column()
    "price": number;

    @Column()
    "bookAt": Date;

    @ManyToOne(() => Tour, tour => tour.booking)
    tour: Tour;
}
