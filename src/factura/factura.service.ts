import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './DTO/create-factura.dto';
import { PrismaService } from '../../prisma/Prisma.Service';

@Injectable()
export class FacturaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFacturaDto: CreateFacturaDto) {
    // Calcula el total y los subtotales
    let total = 0;
    const detallesConSubtotal = await Promise.all(
      createFacturaDto.detalles.map(async (detalle) => {
        const producto = await this.prisma.producto.findUnique({
          where: { id_producto: detalle.producto_id },
        });
        const subtotal = (producto?.precio_unitario ?? 0) * detalle.cantidad;
        total += subtotal;
        return {
          producto_id: detalle.producto_id,
          cantidad: detalle.cantidad,
          subtotal,
        };
      }),
    );

    // Crea la factura y los detalles
    const factura = await this.prisma.factura.create({
      data: {
        cliente_id: createFacturaDto.cliente_id,
        total,
        detalles: {
          create: detallesConSubtotal,
        },
      },
      include: {
        detalles: true,
        cliente: true,
      },
    });

    return {
      message: 'Factura creada exitosamente',
      data: factura,
    };
  }

  async findAll() {
    return this.prisma.factura.findMany();
  }

  async findOne(id: number) {
    return this.prisma.factura.findUnique({
      where: { id_factura: id },
    });
  }

  async remove(id: number) {
    return this.prisma.factura.delete({
      where: { id_factura: id },
    });
  }
}
