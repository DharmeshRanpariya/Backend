import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  'tourName': string;

  @Column()
  'fullName': string;

  @Column()
  'guestSize': number;

  @Column()
  'phone': number;

  @Column()
  'price': number;

  @Column()
  'bookAt': Date;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @ManyToOne(() => Tour, (tour) => tour.booking)
  tour: Tour;
}
