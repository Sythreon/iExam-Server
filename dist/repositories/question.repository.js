"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRepository = void 0;
const common_1 = require("@nestjs/common");
const question_entity_1 = require("../constants/entities/question.entity");
const question_database_1 = require("../data/database/question.database");
const response_helper_1 = require("../helpers/response.helper");
const mapper_util_1 = require("../utilities/mapper.util");
let QuestionRepository = class QuestionRepository {
    constructor() {
    }
    static async CreateQuestion(data) {
        const question = mapper_util_1.Mapper.map(data, question_entity_1.Question);
        const newQuestion = await question_database_1.QuestionDataAgent.Create(question);
        return response_helper_1.IExamResponse.Create({ data: newQuestion, message: "Question created successfully." });
    }
    static async UpdateQuestion(data) {
        const question = await question_database_1.QuestionDataAgent.Find({ questionId: data.questionId });
        if (!question)
            return response_helper_1.IExamResponse.Failure({ error: "Question not found." });
        const result = await question_database_1.QuestionDataAgent.Update({ questionId: data.questionId }, data);
        return response_helper_1.IExamResponse.Update({ data: result, message: "Question updated successfully." });
    }
    static async DeleteQuestion(questionId) {
        const question = await question_database_1.QuestionDataAgent.Find({ questionId });
        if (!question)
            return response_helper_1.IExamResponse.Failure({ error: "Question not found." });
        await question_database_1.QuestionDataAgent.Delete({ questionId });
        return response_helper_1.IExamResponse.Delete({ data: null, message: "Question deleted successfully." });
    }
    static async GetQuestions(filters) {
        const { page, pageSize, ...query } = filters;
        const queries = query;
        if (query.content) {
            const regex = new RegExp(query.content, 'i');
            queries.content = { $regex: regex };
        }
        const questions = await question_database_1.QuestionDataAgent.Get(queries, { page, pageSize });
        return response_helper_1.IExamResponse.Fetch({
            data: questions.data,
            pagination: questions.pagination,
            message: "Questions fetched successfully."
        });
    }
    static async FindQuestion(questionId) {
        const question = await question_database_1.QuestionDataAgent.Find({ questionId });
        if (!question)
            return response_helper_1.IExamResponse.Failure({ error: "Question not found." });
        return response_helper_1.IExamResponse.Success({ data: question, message: "Question fetched successfully." });
    }
};
exports.QuestionRepository = QuestionRepository;
exports.QuestionRepository = QuestionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], QuestionRepository);
//# sourceMappingURL=question.repository.js.map