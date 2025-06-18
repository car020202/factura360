import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { ClienteModule } from './cliente/cliente.module';
import { FacturaModule } from './factura/factura.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductoModule, ClienteModule, FacturaModule, EmpleadoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
