import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    const payload = this.jwtService.verify(authHeader.split(' ')[1], {secret: 'AliBaba'});

    if (payload) {
      request.user = payload;
      return true;
    }

    return false;
  }
}
