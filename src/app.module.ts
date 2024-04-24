import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { TourModule } from './tour/tour.module';
import { BookingModule } from './booking/booking.module';
import { ReviewModule } from './review/review.module';
import { UserChoiceModule } from './user-choice/user-choice.module';
import { Tour } from './tour/entities/tour.entity';
import { Review } from './review/entities/review.entity';
import { Booking } from './booking/entities/booking.entity';
import { UserChoice } from './user-choice/entities/user-choice.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database: 'tours-db',
    entities: [User,Tour,Review,Booking,UserChoice],
    synchronize: true
  }),
    UserModule,
    TourModule,
    BookingModule,
    ReviewModule,
    UserChoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
