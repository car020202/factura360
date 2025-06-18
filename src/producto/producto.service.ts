import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/Prisma.Service';
import { CreateProductoDto } from './DTO/create-producto.dto';

@Injectable()
export class ProductoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductoDto) {
    return this.prisma.producto.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.producto.findMany();
  }
  async findOne(id: number) {
    return this.prisma.producto.findUnique({
      where: { id_producto: id },
    });
  }
  async update(id: number, data: Prisma.ProductoUpdateInput) {
    return this.prisma.producto.update({
      where: { id_producto: id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.producto.delete({
      where: { id_producto: id },
    });
  }
}
