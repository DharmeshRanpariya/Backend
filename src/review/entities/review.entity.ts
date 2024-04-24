import { Tour } from "src/tour/entities/tour.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    reviewText: string;

    @ManyToOne(() => User, user => user.review)
    user: User;
    
    @ManyToOne(() => Tour, tour => tour.reviews)
    tour: Tour;
    
}
