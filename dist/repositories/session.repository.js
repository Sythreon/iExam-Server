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
exports.SessionRepository = void 0;
const common_1 = require("@nestjs/common");
const session_entity_1 = require("../constants/entities/session.entity");
const session_database_1 = require("../data/database/session.database");
const response_helper_1 = require("../helpers/response.helper");
const mapper_util_1 = require("../utilities/mapper.util");
let SessionRepository = class SessionRepository {
    constructor() {
    }
    static async CreateSession(data) {
        const session = mapper_util_1.Mapper.map(data, session_entity_1.Session);
        const newSession = await session_database_1.SessionDataAgent.Create(session);
        return response_helper_1.IExamResponse.Create({ data: newSession, message: "Session created successfully." });
    }
    static async UpdateSession(data) {
        const session = await session_database_1.SessionDataAgent.Find({ sessionId: data.sessionId });
        if (!session)
            return response_helper_1.IExamResponse.Failure({ error: "Session not found." });
        const result = await session_database_1.SessionDataAgent.Update({ sessionId: data.sessionId }, data);
        return response_helper_1.IExamResponse.Update({ data: result, message: "Session updated successfully." });
    }
    static async DeleteSession(sessionId) {
        const session = await session_database_1.SessionDataAgent.Find({ sessionId });
        if (!session)
            return response_helper_1.IExamResponse.Failure({ error: "Session not found." });
        await session_database_1.SessionDataAgent.Delete({ sessionId });
        return response_helper_1.IExamResponse.Delete({ data: null, message: "Session deleted successfully." });
    }
    static async GetSessions(filters) {
        const { page, pageSize, ...query } = filters;
        const sessions = await session_database_1.SessionDataAgent.Get(query, { page, pageSize });
        return response_helper_1.IExamResponse.Fetch({
            data: sessions.data,
            pagination: sessions.pagination,
            message: "Sessions fetched successfully."
        });
    }
    static async FindSession(sessionId) {
        const session = await session_database_1.SessionDataAgent.Find({ sessionId });
        if (!session)
            return response_helper_1.IExamResponse.Failure({ error: "Session not found." });
        return response_helper_1.IExamResponse.Success({ data: session, message: "Session fetched successfully." });
    }
};
exports.SessionRepository = SessionRepository;
exports.SessionRepository = SessionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SessionRepository);
//# sourceMappingURL=session.repository.js.map