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
exports.SubmitExamRequest = exports.ExamAnswerRequest = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const answer_enums_1 = require("../enums/answer.enums");
class ExamAnswerRequest {
}
exports.ExamAnswerRequest = ExamAnswerRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "1234567" }),
    __metadata("design:type", String)
], ExamAnswerRequest.prototype, "sessionId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "1234567" }),
    __metadata("design:type", String)
], ExamAnswerRequest.prototype, "questionId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: answer_enums_1.AnswerChoiceEnum.A }),
    __metadata("design:type", String)
], ExamAnswerRequest.prototype, "selectedChoice", void 0);
class SubmitExamRequest {
}
exports.SubmitExamRequest = SubmitExamRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "1234567" }),
    __metadata("design:type", String)
], SubmitExamRequest.prototype, "sessionId", void 0);
//# sourceMappingURL=exam.requests.js.map