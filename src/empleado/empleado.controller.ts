import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './DTO/create-empledo.dto';
import { UpdateEmpleadoDto } from './DTO/update-empleado.dto';

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

  @Get()
  async findAll() {
    return this.empleadoService.findAll(); // Debe devolver un array de empleados
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const empleado = await this.empleadoService.findById(Number(id));
    if (!empleado) {
      return { message: 'Empleado no encontrado' };
    }
    return empleado;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmpleadoDto: UpdateEmpleadoDto,
  ) {
    return this.empleadoService.update(+id, updateEmpleadoDto);
  }
}
