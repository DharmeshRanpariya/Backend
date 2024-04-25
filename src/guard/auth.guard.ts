import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UserService
  ) {}

  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean> {
    const request: any = context.switchToHttp().getRequest<Request>();
    const token = request.headers.authorization.replace("Bearer ", "")
    if(!token) {
      return false
    }
    const decodedToken = jwt.decode(token) as {
      userId: number
    }
    if(decodedToken && decodedToken.userId) {
      const user = await this.userService.findOne(decodedToken.userId)
      if(!user) {
        return false
      }
      request.user = user;
      return true;
    } else {
      return false
    }
  }
}
