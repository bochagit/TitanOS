import { IsEmail, IsString, IsUUID } from 'class-validator'

export class RegisterDto {
  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsString()
  name: string

  @IsUUID()
  gymId: string
}