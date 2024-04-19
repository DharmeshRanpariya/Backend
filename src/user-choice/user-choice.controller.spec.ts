import { Test, TestingModule } from '@nestjs/testing';
import { UserChoiceController } from './user-choice.controller';
import { UserChoiceService } from './user-choice.service';

describe('UserChoiceController', () => {
  let controller: UserChoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserChoiceController],
      providers: [UserChoiceService],
    }).compile();

    controller = module.get<UserChoiceController>(UserChoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
