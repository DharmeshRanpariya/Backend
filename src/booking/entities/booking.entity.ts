import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    "bookAt": string;
}
