import { PartialType } from '@nestjs/swagger';
import { CreateEmpleadoDto } from './create-empledo.dto';

export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {}
