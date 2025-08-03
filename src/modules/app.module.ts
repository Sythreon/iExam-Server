import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppConfigurationModule } from './appConfig.module';
import { MongooseModule } from '@nestjs/mongoose';

// Controllers
import { QuestionController } from 'src/controllers/question.controller';
import { AnswerController } from 'src/controllers/answer.controller';
import { SessionController } from 'src/controllers/session.controller';
import { ExceptionController } from 'src/controllers/exception.controller';
import { ExamController } from 'src/controllers/exam.controller';

// Repositories
import { QuestionRepository } from 'src/repositories/question.repository';
import { AnswerRepository } from 'src/repositories/answer.repository';
import { SessionRepository } from 'src/repositories/session.repository';
import { ExceptionRepository } from 'src/repositories/exception.repository';
import { ExamRepository } from 'src/repositories/exam.repository';

// Database
import { Database } from 'src/data/database/database';
import { MongooseAccess } from 'src/data/access/mongo.access';

@Module({
    imports: [
        AppConfigurationModule,
        MongooseModule.forRoot(process.env.MONGODB_DB_URI),
    ],
    controllers: [
        ExamController,
        QuestionController,
        AnswerController,
        SessionController,
        ExceptionController
    ],
    providers: [
        ValidationPipe,

        ExamRepository,
        QuestionRepository,
        AnswerRepository,
        SessionRepository,
        ExceptionRepository,

        Database
    ]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) { }

    async onApplicationBootstrap() {
        MongooseAccess.connect();
    }
}
