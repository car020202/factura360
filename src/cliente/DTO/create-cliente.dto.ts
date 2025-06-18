import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({ example: 'Juan Perez' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'juan.perez@example.com' })
  @IsEmail()
  correo: string;

  @ApiProperty({ example: '123456789' })
  @IsPhoneNumber(undefined)
  telefono: string;

  @ApiProperty({ example: 'Calle Falsa 123' })
  @IsString()
  direccion: string;
}
