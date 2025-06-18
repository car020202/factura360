import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min } from 'class-validator';

export class CreateProductoDto {
  @ApiProperty({ example: 'Laptop Dell XPS 13' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 899.99 })
  @IsNumber()
  @Min(0)
  precio_unitario: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(0)
  stock: number;
}
