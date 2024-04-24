import { Review } from "src/review/entities/review.entity";
import { Collection, Column, Entity, OneToMany, PrimaryGeneratedColumn,  } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Review, review => review.user)
    review: Review[];

    @Column()
    dummy: string;
}
