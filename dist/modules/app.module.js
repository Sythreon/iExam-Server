"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const appConfig_module_1 = require("./appConfig.module");
const mongoose_1 = require("@nestjs/mongoose");
const question_controller_1 = require("../controllers/question.controller");
const answer_controller_1 = require("../controllers/answer.controller");
const session_controller_1 = require("../controllers/session.controller");
const exception_controller_1 = require("../controllers/exception.controller");
const exam_controller_1 = require("../controllers/exam.controller");
const question_repository_1 = require("../repositories/question.repository");
const answer_repository_1 = require("../repositories/answer.repository");
const session_repository_1 = require("../repositories/session.repository");
const exception_repository_1 = require("../repositories/exception.repository");
const exam_repository_1 = require("../repositories/exam.repository");
const database_1 = require("../data/database/database");
const mongo_access_1 = require("../data/access/mongo.access");
let AppModule = class AppModule {
    configure(consumer) { }
    async onApplicationBootstrap() {
        mongo_access_1.MongooseAccess.connect();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            appConfig_module_1.AppConfigurationModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_DB_URI),
        ],
        controllers: [
            exam_controller_1.ExamController,
            question_controller_1.QuestionController,
            answer_controller_1.AnswerController,
            session_controller_1.SessionController,
            exception_controller_1.ExceptionController
        ],
        providers: [
            common_1.ValidationPipe,
            exam_repository_1.ExamRepository,
            question_repository_1.QuestionRepository,
            answer_repository_1.AnswerRepository,
            session_repository_1.SessionRepository,
            exception_repository_1.ExceptionRepository,
            database_1.Database
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map