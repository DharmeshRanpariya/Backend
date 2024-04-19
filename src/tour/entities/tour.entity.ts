import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
