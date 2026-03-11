import { IsEmail, IsString, IsEnum, IsUUID } from 'class-validator'
import { UserRole } from 'generated/prisma/enums'

export class RegisterDto {
  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsString()
  name: string

  @IsEnum(UserRole)
  role: UserRole

  @IsUUID()
  gymId: string
}