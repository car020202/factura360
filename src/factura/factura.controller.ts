import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './DTO/create-factura.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createFacturaDto: CreateFacturaDto) {
    return this.facturaService.create(createFacturaDto);
  }

  @Get()
  async findAll() {
    const facturas = await this.facturaService.findAll();
    return {
      message: 'Facturas retrieved successfully',
      data: facturas,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.facturaService.findOne(Number(id));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.facturaService.remove(Number(id));
  }
}
