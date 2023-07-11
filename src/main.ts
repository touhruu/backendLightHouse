import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000
  

  const config = new DocumentBuilder()
    .setTitle('lightHouse') //title project
    .setDescription('Documentation REST API') //description project
    .setVersion('1.0.0') //version project
    // .addTag('User')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });
}
bootstrap();