import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserChoiceService } from './user-choice.service';
import { CreateUserChoiceDto } from './dto/create-user-choice.dto';
import { UpdateUserChoiceDto } from './dto/update-user-choice.dto';

@Controller('user-choice')
export class UserChoiceController {
  constructor(private readonly userChoiceService: UserChoiceService) {}

  @Post()
  create(@Body() createUserChoiceDto: CreateUserChoiceDto) {
    return this.userChoiceService.create(createUserChoiceDto);
  }

  @Get()
  findAll() {
    return this.userChoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userChoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserChoiceDto: UpdateUserChoiceDto) {
    return this.userChoiceService.update(+id, updateUserChoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userChoiceService.remove(+id);
  }
}
