import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty({ example: 'Karina Henriquez' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'karina@example.com' })
  @IsEmail()
  correo: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'admin' })
  @IsString()
  rol: string;
}
