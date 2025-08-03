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
exports.UpdateQuestionRequest = exports.GetQuestionsRequest = exports.CreateQuestionRequest = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const pagination_models_1 = require("../models/pagination.models");
class CreateQuestionRequest {
}
exports.CreateQuestionRequest = CreateQuestionRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "What is the capital of France?" }),
    __metadata("design:type", String)
], CreateQuestionRequest.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "Paris" }),
    __metadata("design:type", String)
], CreateQuestionRequest.prototype, "correctAnswer", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: ["Rome", "Paris", "London", "Marseille", "Lyon"] }),
    __metadata("design:type", Array)
], CreateQuestionRequest.prototype, "options", void 0);
class GetQuestionsRequest extends pagination_models_1.PaginatedRequest {
}
exports.GetQuestionsRequest = GetQuestionsRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'What is the capital of', required: false }),
    __metadata("design:type", String)
], GetQuestionsRequest.prototype, "content", void 0);
class UpdateQuestionRequest {
}
exports.UpdateQuestionRequest = UpdateQuestionRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: '1234567' }),
    __metadata("design:type", String)
], UpdateQuestionRequest.prototype, "questionId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "What is the capital of France?" }),
    __metadata("design:type", String)
], UpdateQuestionRequest.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "Paris" }),
    __metadata("design:type", String)
], UpdateQuestionRequest.prototype, "correctAnswer", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: ["Rome", "Paris", "London", "Marseille", "Lyon"] }),
    __metadata("design:type", Array)
], UpdateQuestionRequest.prototype, "options", void 0);
//# sourceMappingURL=question.requests.js.map