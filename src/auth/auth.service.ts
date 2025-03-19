
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
// import { User } from 'src/user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(private readonly  usersService: UsersService,
    private readonly  jwtService: JwtService
  ) {}
  
//   async login(user: User) {
//     const payload = { username: user.username, sub: user.uuid };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }

async signIn(
  username: string,
  pass: string,
): Promise<{ access_token: string }> {
  const user = await this.usersService.findOne(username);
  if (user?.password !== pass) {
    throw new UnauthorizedException();
  }
  const payload = { sub: user.id, username: user.username };
  return {
    access_token: await this.jwtService.signAsync(payload),
  };
}
}
