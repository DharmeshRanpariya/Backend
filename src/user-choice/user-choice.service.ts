import { Injectable } from '@nestjs/common';
import { CreateUserChoiceDto } from './dto/create-user-choice.dto';
import { UpdateUserChoiceDto } from './dto/update-user-choice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserChoice } from './entities/user-choice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserChoiceService {
  constructor(
    @InjectRepository(UserChoice) private repo: Repository<UserChoice>
  ){}
  create(createUserChoiceDto: CreateUserChoiceDto) {
    const userChoice = this.repo.create(createUserChoiceDto);
    return this.repo.save(userChoice);
  }

  findAll() {
    return `This action returns all userChoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userChoice`;
  }

  update(id: number, updateUserChoiceDto: UpdateUserChoiceDto) {
    return `This action updates a #${id} userChoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} userChoice`;
  }
}
