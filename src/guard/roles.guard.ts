import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/decorator/roles.decorator';

const fakeUser = {
    username: "aaa",
    roles: [
        'USER'
    ]
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    request.user.roles;
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log('====================================');
    console.log(roles);
    console.log('====================================');
    return true;
  }
}
