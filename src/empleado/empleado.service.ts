import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/Prisma.Service';
import * as bcrypt from 'bcrypt';
import { CreateEmpleadoDto } from './DTO/create-empledo.dto';

@Injectable()
export class EmpleadoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEmpleadoDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.empleado.create({
      data: { ...data, password: hashedPassword },
    });
  }

  async findByCorreo(correo: string) {
    return this.prisma.empleado.findUnique({ where: { correo } });
  }

  async findById(id: number) {
    return this.prisma.empleado.findUnique({ where: { id_empleado: id } });
  }
}
