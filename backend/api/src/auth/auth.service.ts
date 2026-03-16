import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { UserRole } from 'generated/prisma/enums';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService
  ) {}

  async register(dto: RegisterDto){
    const exists = await this.usersService.findByEmail(dto.email)
    if (exists) throw new ConflictException('Email already in use')

    const hashedPassword = await bcrypt.hash(dto.password, 10)

    const user = await this.usersService.create({
      email: dto.email,
      name: dto.name,
      password: hashedPassword,
      role: UserRole.OWNER,
      gymId: dto.gymId
    })

    return this.generateToken(user)
  }

  async login(email: string, password: string){
    const user = await this.usersService.findByEmail(email)
    if (!user) throw new UnauthorizedException()

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new UnauthorizedException()

    return this.generateToken(user)
  }

  generateToken(user: any){
    return {
      access_token: this.jwt.sign({
        sub: user.id,
        gymId: user.gymId,
        role: user.role
      })
    }
  }
}
