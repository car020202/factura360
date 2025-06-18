import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'tu_jwt_secret', // Usa env variable en producción
    });
  }

  async validate(payload: any) {
    return {
      id_empleado: payload.sub,
      correo: payload.correo,
      rol: payload.rol,
    };
  }
}
