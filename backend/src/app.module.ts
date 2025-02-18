import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, seconds } from '@nestjs/throttler';

import { PresenceModule } from './presence/presence.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ThrottlerModule.forRoot({
            throttlers: [
                { name: 'global', ttl: seconds(60), limit: 300 },
                { name: 'global-short', ttl: seconds(10), limit: 50 },
                { name: 'global-long', ttl: seconds(300), limit: 800 }
            ]
        }),

		PresenceModule
    ],
    controllers: []
})
export class AppModule { }
