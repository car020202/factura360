import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './DTO/create-empledo.dto';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post('register')
  async register(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    const empleado = await this.empleadoService.create(createEmpleadoDto);
    return {
      message: 'Empleado registrado exitosamente',
      data: empleado,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const empleado = await this.empleadoService.findById(Number(id));
    if (!empleado) {
      return { message: 'Empleado no encontrado' };
    }
    return empleado;
  }
}
