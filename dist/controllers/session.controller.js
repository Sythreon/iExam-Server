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
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const session_requests_1 = require("../constants/requests/session.requests");
const mapper_util_1 = require("../utilities/mapper.util");
const response_helper_1 = require("../helpers/response.helper");
const session_repository_1 = require("../repositories/session.repository");
const session_entity_1 = require("../constants/entities/session.entity");
let SessionController = class SessionController {
    constructor() { }
    async CreateSession(request, res) {
        request = mapper_util_1.Mapper.map(request, session_requests_1.CreateSessionRequest);
        const response = await session_repository_1.SessionRepository.CreateSession(request);
        if (response.success)
            response.data = mapper_util_1.Mapper.map(response.data, session_entity_1.Session);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async GetSession(request, res) {
        request = mapper_util_1.Mapper.map(request, session_requests_1.GetSessionsRequest);
        const response = await session_repository_1.SessionRepository.GetSessions(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async FindSession(sessionId, res) {
        const response = await session_repository_1.SessionRepository.FindSession(sessionId);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async DeleteSession(sessionId, res) {
        const response = await session_repository_1.SessionRepository.DeleteSession(sessionId);
        return response_helper_1.IExamResponse.Send(response, res);
    }
    async UpdateSession(request, res) {
        request = mapper_util_1.Mapper.map(request, session_requests_1.UpdateSessionRequest);
        const response = await session_repository_1.SessionRepository.UpdateSession(request);
        return response_helper_1.IExamResponse.Send(response, res);
    }
};
exports.SessionController = SessionController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({ summary: "Create a session." }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_requests_1.CreateSessionRequest, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "CreateSession", null);
__decorate([
    (0, common_1.Get)('/get'),
    (0, swagger_1.ApiOperation)({ summary: "Get session(s)." }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_requests_1.GetSessionsRequest, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "GetSession", null);
__decorate([
    (0, common_1.Get)('/find/:sessionId'),
    (0, swagger_1.ApiOperation)({ summary: "Get a single session." }),
    __param(0, (0, common_1.Param)('sessionId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "FindSession", null);
__decorate([
    (0, common_1.Delete)('/delete/:sessionId'),
    (0, swagger_1.ApiOperation)({ summary: "Delete a session." }),
    __param(0, (0, common_1.Param)('sessionId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "DeleteSession", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, swagger_1.ApiOperation)({ summary: "Update a session." }),
    (0, swagger_1.ApiBody)({ type: session_requests_1.UpdateSessionRequest }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_requests_1.UpdateSessionRequest, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "UpdateSession", null);
exports.SessionController = SessionController = __decorate([
    (0, common_1.Controller)('api/v1/session'),
    (0, swagger_1.ApiTags)('Session API'),
    __metadata("design:paramtypes", [])
], SessionController);
//# sourceMappingURL=session.controller.js.map