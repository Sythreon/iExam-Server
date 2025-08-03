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
exports.AnswerRepository = void 0;
const common_1 = require("@nestjs/common");
const answer_entity_1 = require("../constants/entities/answer.entity");
const answer_database_1 = require("../data/database/answer.database");
const response_helper_1 = require("../helpers/response.helper");
const mapper_util_1 = require("../utilities/mapper.util");
let AnswerRepository = class AnswerRepository {
    constructor() {
    }
    static async CreateAnswer(data) {
        const answer = mapper_util_1.Mapper.map(data, answer_entity_1.Answer);
        const newAnswer = await answer_database_1.AnswerDataAgent.Create(answer);
        return response_helper_1.IExamResponse.Create({ data: newAnswer, message: "Answer created successfully." });
    }
    static async UpdateAnswer(data) {
        const answer = await answer_database_1.AnswerDataAgent.Find({ answerId: data.answerId });
        if (!answer)
            return response_helper_1.IExamResponse.Failure({ error: "Answer not found." });
        const result = await answer_database_1.AnswerDataAgent.Update({ answerId: data.answerId }, data);
        return response_helper_1.IExamResponse.Update({ data: result, message: "Answer updated successfully." });
    }
    static async DeleteAnswer(answerId) {
        const answer = await answer_database_1.AnswerDataAgent.Find({ answerId });
        if (!answer)
            return response_helper_1.IExamResponse.Failure({ error: "Answer not found." });
        await answer_database_1.AnswerDataAgent.Delete({ answerId });
        return response_helper_1.IExamResponse.Delete({ data: null, message: "Answer deleted successfully." });
    }
    static async GetAnswers(filters) {
        const { page, pageSize, ...query } = filters;
        const answers = await answer_database_1.AnswerDataAgent.Get(query, { page, pageSize });
        return response_helper_1.IExamResponse.Fetch({
            data: answers.data,
            pagination: answers.pagination,
            message: "Answers fetched successfully."
        });
    }
    static async FindAnswer(answerId) {
        const answer = await answer_database_1.AnswerDataAgent.Find({ answerId });
        if (!answer)
            return response_helper_1.IExamResponse.Failure({ error: "Answer not found." });
        return response_helper_1.IExamResponse.Success({ data: answer, message: "Answer fetched successfully." });
    }
};
exports.AnswerRepository = AnswerRepository;
exports.AnswerRepository = AnswerRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AnswerRepository);
//# sourceMappingURL=answer.repository.js.map