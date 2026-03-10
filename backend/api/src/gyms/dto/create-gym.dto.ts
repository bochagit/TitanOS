import { IsString, IsOptional } from "class-validator";

export class CreateGymDto {
  @IsString()
  name: string

  @IsString()
  @IsOptional()
  logoUrl?: string

  @IsString()
  @IsOptional()
  primaryColor?: string

  @IsString()
  @IsOptional()
  secondaryColor?: string
}
