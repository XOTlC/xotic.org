import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	app.useGlobalPipes(new ValidationPipe({ forbidNonWhitelisted: true, whitelist: true }));
	app.setGlobalPrefix('/api');

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	await app.listen(configService.get<number>('PORT'));
}

bootstrap();
