import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // Cambia esto si tu frontend está en otra URL
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Factura 360 API')
    .setDescription('API for managing invoices and related operations')
    .setVersion('1.0')
    .addTag('Factura360')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
