import { IsString, IsEmail, IsUUID, IsEnum } from 'class-validator'
import { UserRole } from 'generated/prisma/enums'

export class CreateUserDto {
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
