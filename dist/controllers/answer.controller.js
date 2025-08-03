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
exports.AnswerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const answer_requests_1 = require("../constants/requests/answer.requests");
const mapper_util_1 = require("../utilities/mapper.util");
const response_helper_1 = require("../helpers/response.helper");
const answer_repository_1 = require("../repositories/answer.repository");
const answer_entity_1 = require("../constants/entities/answer.entity");
let AnswerController = class AnswerController {
    constructor() { }
    async CreateAnswer(request, res) {
        request = mapper_util_1.Mapper.map(request, answer_requests_1.CreateAnswerRequest);
        const response = await answer_repository_1.AnswerRepository.CreateAnswer(request);
        if (response.success)
            response.data = mapper_util_1.Mapper.map(response.data, answer_entity_1.Answer);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async GetAnswer(request, res) {
        request = mapper_util_1.Mapper.map(request, answer_requests_1.GetAnswersRequest);
        const response = await answer_repository_1.AnswerRepository.GetAnswers(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async FindAnswer(answerId, res) {
        const response = await answer_repository_1.AnswerRepository.FindAnswer(answerId);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async DeleteAnswer(answerId, res) {
        const response = await answer_repository_1.AnswerRepository.DeleteAnswer(answerId);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async UpdateAnswer(request, res) {
        request = mapper_util_1.Mapper.map(request, answer_requests_1.UpdateAnswerRequest);
        const response = await answer_repository_1.AnswerRepository.UpdateAnswer(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
};
exports.AnswerController = AnswerController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({ summary: "Create a answer." }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answer_requests_1.CreateAnswerRequest, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "CreateAnswer", null);
__decorate([
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiOperation)({ summary: "Get answer(s)." }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answer_requests_1.GetAnswersRequest, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "GetAnswer", null);
__decorate([
    (0, common_1.Get)('/find/:answerId'),
    (0, swagger_1.ApiOperation)({ summary: "Get a single answer." }),
    __param(0, (0, common_1.Param)('answerId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "FindAnswer", null);
__decorate([
    (0, common_1.Delete)('/delete/:answerId'),
    (0, swagger_1.ApiOperation)({ summary: "Delete a answer." }),
    __param(0, (0, common_1.Param)('answerId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "DeleteAnswer", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, swagger_1.ApiOperation)({ summary: "Update a answer." }),
    (0, swagger_1.ApiBody)({ type: answer_requests_1.UpdateAnswerRequest }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answer_requests_1.UpdateAnswerRequest, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "UpdateAnswer", null);
exports.AnswerController = AnswerController = __decorate([
    (0, common_1.Controller)('api/v1/answer'),
    (0, swagger_1.ApiTags)('Answer API'),
    __metadata("design:paramtypes", [])
], AnswerController);
//# sourceMappingURL=answer.controller.js.map