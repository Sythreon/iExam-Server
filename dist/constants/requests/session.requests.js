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
exports.UpdateSessionRequest = exports.GetSessionsRequest = exports.CreateSessionRequest = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const pagination_models_1 = require("../models/pagination.models");
const session_enums_1 = require("../enums/session.enums");
class CreateSessionRequest {
}
exports.CreateSessionRequest = CreateSessionRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], CreateSessionRequest.prototype, "numberOfQuestions", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], CreateSessionRequest.prototype, "durationInMinutes", void 0);
class GetSessionsRequest extends pagination_models_1.PaginatedRequest {
}
exports.GetSessionsRequest = GetSessionsRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: '03-05-2001', required: false }),
    __metadata("design:type", String)
], GetSessionsRequest.prototype, "date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: session_enums_1.SessionStatusEnum.PENDING, required: false }),
    __metadata("design:type", String)
], GetSessionsRequest.prototype, "status", void 0);
class UpdateSessionRequest {
}
exports.UpdateSessionRequest = UpdateSessionRequest;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: '1234567' }),
    __metadata("design:type", String)
], UpdateSessionRequest.prototype, "sessionId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], UpdateSessionRequest.prototype, "numberOfQuestions", void 0);
//# sourceMappingURL=session.requests.js.map