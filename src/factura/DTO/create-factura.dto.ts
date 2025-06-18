import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDetalleFacturaDto {
  @ApiProperty()
  @IsNumber()
  producto_id: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  cantidad: number;
}

export class CreateFacturaDto {
  @ApiProperty()
  @IsNumber()
  cliente_id: number;

  @ApiProperty()
  @IsNumber()
  empleado_id: number;

  @ApiProperty({ type: [CreateDetalleFacturaDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDetalleFacturaDto)
  detalles: CreateDetalleFacturaDto[];
}
