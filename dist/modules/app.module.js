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
const question_repository_1 = require("../repositories/question.repository");
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
            question_controller_1.QuestionController
        ],
        providers: [
            common_1.ValidationPipe,
            question_repository_1.QuestionRepository,
            database_1.Database
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map