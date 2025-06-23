import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './DTO/create-factura.dto';

@ApiTags('Factura')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @Post()
  async create(@Body() dto: CreateFacturaDto, @Request() req) {
    return this.facturaService.create({
      ...dto,
      empleado_id: req.user.id_empleado,
    });
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
