import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginEmpleadoDto {
  @ApiProperty({ example: 'karina@example.com' })
  @IsEmail()
  correo: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;
}
