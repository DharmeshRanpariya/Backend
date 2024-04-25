import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  rating: number;

  @Column()
  reviewText: string;

  @Column()
  userId: number;

  @Column()
  tourId: number;

  @ManyToOne(() => User, (user) => user.review)
  user: User;

  @ManyToOne(() => Tour, (tour) => tour.reviews)
  tour: Tour;
}
