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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const question_requests_1 = require("../constants/requests/question.requests");
const mapper_util_1 = require("../utilities/mapper.util");
const response_helper_1 = require("../helpers/response.helper");
const question_repository_1 = require("../repositories/question.repository");
const question_entity_1 = require("../constants/entities/question.entity");
let QuestionController = class QuestionController {
    constructor() { }
    async CreateQuestion(request, res) {
        request = mapper_util_1.Mapper.map(request, question_requests_1.CreateQuestionRequest);
        const response = await question_repository_1.QuestionRepository.CreateQuestion(request);
        if (response.success)
            response.data = mapper_util_1.Mapper.map(response.data, question_entity_1.Question);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async GetQuestion(request, res) {
        request = mapper_util_1.Mapper.map(request, question_requests_1.GetQuestionsRequest);
        const response = await question_repository_1.QuestionRepository.GetQuestions(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async FindQuestion(questionId, res) {
        const response = await question_repository_1.QuestionRepository.FindQuestion(questionId);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async DeleteQuestion(questionId, res) {
        const response = await question_repository_1.QuestionRepository.DeleteQuestion(questionId);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async UpdateQuestion(request, res) {
        request = mapper_util_1.Mapper.map(request, question_requests_1.UpdateQuestionRequest);
        const response = await question_repository_1.QuestionRepository.UpdateQuestion(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({ summary: "Create a question." }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_requests_1.CreateQuestionRequest, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "CreateQuestion", null);
__decorate([
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiOperation)({ summary: "Get question(s)." }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_requests_1.GetQuestionsRequest, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "GetQuestion", null);
__decorate([
    (0, common_1.Get)('/find/:questionId'),
    (0, swagger_1.ApiOperation)({ summary: "Get a single question." }),
    __param(0, (0, common_1.Param)('questionId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "FindQuestion", null);
__decorate([
    (0, common_1.Delete)('/delete/:questionId'),
    (0, swagger_1.ApiOperation)({ summary: "Delete a question." }),
    __param(0, (0, common_1.Param)('questionId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "DeleteQuestion", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, swagger_1.ApiOperation)({ summary: "Update a question." }),
    (0, swagger_1.ApiBody)({ type: question_requests_1.UpdateQuestionRequest }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_requests_1.UpdateQuestionRequest, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "UpdateQuestion", null);
exports.QuestionController = QuestionController = __decorate([
    (0, common_1.Controller)('api/v1/question'),
    (0, swagger_1.ApiTags)('Question API'),
    __metadata("design:paramtypes", [])
], QuestionController);
//# sourceMappingURL=question.controller.js.map