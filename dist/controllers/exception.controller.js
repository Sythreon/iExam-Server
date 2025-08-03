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
exports.ExceptionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const exception_requests_1 = require("../constants/requests/exception.requests");
const mapper_util_1 = require("../utilities/mapper.util");
const response_helper_1 = require("../helpers/response.helper");
const exception_repository_1 = require("../repositories/exception.repository");
let ExceptionController = class ExceptionController {
    constructor() { }
    async GetException(request, res) {
        request = mapper_util_1.Mapper.map(request, exception_requests_1.GetExceptionsRequest);
        const response = await exception_repository_1.ExceptionRepository.GetExceptions(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async FindException(exceptionId, res) {
        const response = await exception_repository_1.ExceptionRepository.FindException(exceptionId);
        return response_helper_1.IExamResponse.Send(response, res);
    }
};
exports.ExceptionController = ExceptionController;
__decorate([
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiOperation)({ summary: "Get exception(s)." }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exception_requests_1.GetExceptionsRequest, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ExceptionController.prototype, "GetException", null);
__decorate([
    (0, common_1.Get)('/find/:exceptionId'),
    (0, swagger_1.ApiOperation)({ summary: "Get a single exception." }),
    __param(0, (0, common_1.Param)('exceptionId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ExceptionController.prototype, "FindException", null);
exports.ExceptionController = ExceptionController = __decorate([
    (0, common_1.Controller)('api/v1/exception'),
    (0, swagger_1.ApiTags)('Exception API'),
    __metadata("design:paramtypes", [])
], ExceptionController);
//# sourceMappingURL=exception.controller.js.map