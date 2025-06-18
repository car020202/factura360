import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';
import { PrismaService } from '../../prisma/Prisma.Service';

@Module({
  providers: [FacturaService, PrismaService],
  controllers: [FacturaController],
})
export class FacturaModule {}
