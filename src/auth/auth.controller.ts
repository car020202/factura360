import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginEmpleadoDto } from '../empleado/DTO/login-empleado.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginEmpleadoDto: LoginEmpleadoDto) {
    const empleado = await this.authService.validateEmpleado(
      loginEmpleadoDto.correo,
      loginEmpleadoDto.password,
    );
    if (!empleado) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    return this.authService.login(empleado);
  }
}
