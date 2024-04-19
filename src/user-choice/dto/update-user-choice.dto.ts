import { PartialType } from '@nestjs/mapped-types';
import { CreateUserChoiceDto } from './create-user-choice.dto';

export class UpdateUserChoiceDto extends PartialType(CreateUserChoiceDto) {}
