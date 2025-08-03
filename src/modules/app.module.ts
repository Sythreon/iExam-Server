import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppConfigurationModule } from './appConfig.module';

@Module({
    imports: [
        AppConfigurationModule
    ],
    controllers: [],
    providers: [
        ValidationPipe
    ]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) { }

    async onApplicationBootstrap() { }
}
