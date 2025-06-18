import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { PrismaModule } from '../../prisma/Prisma.Module';

@Module({
  imports: [PrismaModule],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
  exports: [EmpleadoService], // <-- Exporta el servicio aquí
})
export class EmpleadoModule {}
