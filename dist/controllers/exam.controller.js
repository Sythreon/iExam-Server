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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const exam_requests_1 = require("../constants/requests/exam.requests");
const response_helper_1 = require("../helpers/response.helper");
const exam_repository_1 = require("../repositories/exam.repository");
let ExamController = class ExamController {
    constructor() { }
    async CreateExam(request, res) {
        const response = await exam_repository_1.ExamRepository.Start();
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async AnswerExam(request, res) {
        const response = await exam_repository_1.ExamRepository.Answer(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
};
exports.ExamController = ExamController;
__decorate([
    (0, common_1.Post)('/start-exam'),
    (0, swagger_1.ApiOperation)({ summary: "Start an exam." }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "CreateExam", null);
__decorate([
    (0, common_1.Post)('/answer'),
    (0, swagger_1.ApiOperation)({ summary: "Start an exam." }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exam_requests_1.ExamAnswerRequest, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "AnswerExam", null);
exports.ExamController = ExamController = __decorate([
    (0, common_1.Controller)('api/v1/exam'),
    (0, swagger_1.ApiTags)('Exam API'),
    __metadata("design:paramtypes", [])
], ExamController);
//# sourceMappingURL=exam.controller.js.map