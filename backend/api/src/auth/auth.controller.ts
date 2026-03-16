import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtGuard } from './jwt/jwt.guard';

@Controller('auth')
export class AuthController{
  constructor(private authService: AuthService){}

  @Post('register')
  register(@Body() dto: RegisterDto){
    return this.authService.register(dto)
  }

  @Post('login')
  login(@Body() dto: LoginDto){
    return this.authService.login(dto.email, dto.password)
  }

  @Get('me')
  @UseGuards(JwtGuard)
  me(@Req() req: any){
    return req.user
  }
}
