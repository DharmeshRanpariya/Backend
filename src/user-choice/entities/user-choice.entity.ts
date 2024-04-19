import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserChoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    days: number;

    @Column()
    people: number;

    @Column()
    price: number;

    @Column()
    discription: string

}
