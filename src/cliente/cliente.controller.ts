import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateClienteDto } from './DTO/create-cliente.dto';
import { UpdateClienteDto } from './DTO/update-cliente.dto';
import { ClienteService } from './cliente.service';
import { PrismaService } from '../../prisma/Prisma.Service';

@Controller('cliente')
export class ClienteController {
  constructor(
    private readonly clienteService: ClienteService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    const cliente = await this.clienteService.create(createClienteDto);
    return {
      message: 'Cliente created successfully',
      data: cliente,
    };
  }
  @Get()
  async findAll() {
    return {
      message: 'Clientes retrieved successfully',
      data: await this.clienteService.findAll(),
    };
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      message: 'Cliente retrieved successfully',
      data: await this.clienteService.findOne(+id),
    };
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return {
      message: 'Cliente updated successfully',
      data: await this.clienteService.update(+id, updateClienteDto),
    };
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      message: 'Cliente removed successfully',
      data: await this.clienteService.remove(+id),
    };
  }
}
