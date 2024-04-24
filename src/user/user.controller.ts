import { Controller, Get, Post, Body, Patch, Param, Delete, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';
import { CureentUser } from './decorators/current-user.decorators';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService
  ) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
    
  }

  @Get('/who')
  who(@CureentUser() user: string){
    return user;
  }

  @Post('/signin')
  async signin(@Body() createUserDto: CreateUserDto, @Session() session: any){
    const login = await this.authService.signin(createUserDto.email, createUserDto.password);
    // session.email = login.email;
    return login;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get(':email')
  find(@Param('email') email: string){
    return this.userService.find(email)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
