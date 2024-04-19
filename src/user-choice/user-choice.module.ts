import { Module } from '@nestjs/common';
import { UserChoiceService } from './user-choice.service';
import { UserChoiceController } from './user-choice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserChoice } from './entities/user-choice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserChoice])],
  controllers: [UserChoiceController],
  providers: [UserChoiceService],
})
export class UserChoiceModule {}
