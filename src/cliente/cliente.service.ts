import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './DTO/create-cliente.dto';
import { UpdateClienteDto } from './DTO/update-cliente.dto';
import { PrismaService } from '../../prisma/Prisma.Service';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    return this.prisma.cliente.create({ data: createClienteDto });
  }
  async findAll() {
    return this.prisma.cliente.findMany();
  }
  async findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id_cliente: id } });
  }
  async update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prisma.cliente.update({
      where: { id_cliente: id },
      data: updateClienteDto,
    });
  }
  async remove(id: number) {
    return this.prisma.cliente.delete({ where: { id_cliente: id } });
  }
}
