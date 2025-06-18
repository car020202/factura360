import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmpleadoService } from '../empleado/empleado.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private empleadoService: EmpleadoService,
    private jwtService: JwtService,
  ) {}

  async validateEmpleado(correo: string, password: string) {
    const empleado = await this.empleadoService.findByCorreo(correo);
    if (empleado && (await bcrypt.compare(password, empleado.password))) {
      const { password, ...result } = empleado;
      return result;
    }
    return null;
  }

  async login(empleado: any) {
    const payload = {
      sub: empleado.id_empleado,
      correo: empleado.correo,
      rol: empleado.rol,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
