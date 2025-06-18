import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/Prisma.Service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <-- Esto es importante
})
export class PrismaModule {}
