import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { EmpleadoModule } from '../empleado/empleado.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    EmpleadoModule,
    JwtModule.register({
      secret: 'tu_jwt_secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
