import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookiSession = require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookiSession({
      keys: ['Dhamo'],
    })
  )
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
