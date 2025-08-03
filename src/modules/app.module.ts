import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppConfigurationModule } from './appConfig.module';
import { MongooseModule } from '@nestjs/mongoose';

// Controllers
import { QuestionController } from 'src/controllers/question.controller';

// Repositories
import { QuestionRepository } from 'src/repositories/question.repository';

// Database
import { Database } from 'src/data/database/database';
import { MongooseAccess } from 'src/data/access/mongo.access';

@Module({
    imports: [
        AppConfigurationModule,
        MongooseModule.forRoot(process.env.MONGODB_DB_URI),
    ],
    controllers: [
        QuestionController
    ],
    providers: [
        ValidationPipe,

        QuestionRepository,

        Database
    ]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) { }

    async onApplicationBootstrap() {
        MongooseAccess.connect();
    }
}
