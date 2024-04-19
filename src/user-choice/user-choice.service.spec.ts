import { Test, TestingModule } from '@nestjs/testing';
import { UserChoiceService } from './user-choice.service';

describe('UserChoiceService', () => {
  let service: UserChoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserChoiceService],
    }).compile();

    service = module.get<UserChoiceService>(UserChoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
