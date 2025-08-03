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
exports.GetExceptionsRequest = exports.CreateExceptionRequest = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const pagination_models_1 = require("../models/pagination.models");
class CreateExceptionRequest {
}
exports.CreateExceptionRequest = CreateExceptionRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "1234567" }),
    __metadata("design:type", String)
], CreateExceptionRequest.prototype, "sessionId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 1234567890 }),
    __metadata("design:type", Number)
], CreateExceptionRequest.prototype, "date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "POST" }),
    __metadata("design:type", String)
], CreateExceptionRequest.prototype, "method", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "https://iexam.onrender.com/api/v1/session/create" }),
    __metadata("design:type", String)
], CreateExceptionRequest.prototype, "url", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], CreateExceptionRequest.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "Failed to create session." }),
    __metadata("design:type", String)
], CreateExceptionRequest.prototype, "message", void 0);
class GetExceptionsRequest extends pagination_models_1.PaginatedRequest {
}
exports.GetExceptionsRequest = GetExceptionsRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "1234567", required: false }),
    __metadata("design:type", String)
], GetExceptionsRequest.prototype, "sessionId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "GET", required: false }),
    __metadata("design:type", String)
], GetExceptionsRequest.prototype, "method", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: "1234567", required: false }),
    __metadata("design:type", String)
], GetExceptionsRequest.prototype, "url", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 500, required: false }),
    __metadata("design:type", String)
], GetExceptionsRequest.prototype, "code", void 0);
//# sourceMappingURL=exception.requests.js.map