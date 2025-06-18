import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [ProductoModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
