import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Session,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import * as jwt from 'jsonwebtoken';

interface CustomType {
  userId: number
}

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/getUserByToken')
  who(@Req() req) {
    const token = req.headers.authorization.replace("Bearer ", "")
    const decodedToken = jwt.decode(token) as CustomType
    return this.userService.findOne(decodedToken.userId)
  }

  @Post('/signin')
  async signin(@Body() createUserDto: CreateUserDto, @Session() session: any) {
    const login = await this.authService.signin(
      createUserDto.email,
      createUserDto.password,
    );
    // session.email = login.email;
    return login;
  }

  @Get()
  @Roles(['USER'])
  @UseGuards(AuthGuard, RolesGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get(':email')
  find(@Param('email') email: string) {
    return this.userService.find(email);
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
