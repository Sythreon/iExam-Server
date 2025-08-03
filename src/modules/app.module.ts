import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppConfigurationModule } from './appConfig.module';
import { MongooseModule } from '@nestjs/mongoose';

// Controllers
import { QuestionController } from 'src/controllers/question.controller';
import { AnswerController } from 'src/controllers/answer.controller';

// Repositories
import { QuestionRepository } from 'src/repositories/question.repository';
import { AnswerRepository } from 'src/repositories/answer.repository';

// Database
import { Database } from 'src/data/database/database';
import { MongooseAccess } from 'src/data/access/mongo.access';

@Module({
    imports: [
        AppConfigurationModule,
        MongooseModule.forRoot(process.env.MONGODB_DB_URI),
    ],
    controllers: [
        QuestionController,
        AnswerController
    ],
    providers: [
        ValidationPipe,

        QuestionRepository,
        AnswerRepository,

        Database
    ]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) { }

    async onApplicationBootstrap() {
        MongooseAccess.connect();
    }
}
