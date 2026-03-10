import { IsString, IsEmail, IsOptional, IsUUID } from 'class-validator'

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsUUID()
  gymId: string;
}