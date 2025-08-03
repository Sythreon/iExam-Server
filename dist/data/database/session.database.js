"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionDataAgent = exports.SessionDb = exports.SessionSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const database_1 = require("./database");
const generator_util_1 = require("../../utilities/generator.util");
const session_middleware_1 = require("../middlewares/session.middleware");
const session_enums_1 = require("../../constants/enums/session.enums");
const schema = {
    sessionId: { type: String, default: generator_util_1.Generator.GenerateObjectID },
    questionSeed: { type: Number },
    choiceSeed: { type: Number },
    numberOfQuestions: { type: Number, default: 10 },
    durationInMinutes: { type: Number, default: 10 },
    progress: { type: Number, default: 1 },
    finalScore: { type: Number, default: 0 },
    startTime: { type: Number, default: Date.now() },
    endTime: { type: Number, default: Date.now() + 60 * 10 * 1000 },
    status: { type: String, default: session_enums_1.SessionStatusEnum.PENDING },
    dateCreated: { type: Number, default: Date.now },
    isDeleted: { type: Boolean, default: false }
};
exports.SessionSchema = (0, session_middleware_1.ApplySessionMiddleware)(new mongoose_1.Schema(schema));
;
exports.SessionDb = (0, mongoose_2.model)('sessions', exports.SessionSchema);
exports.SessionDataAgent = new database_1.Database();
exports.SessionDataAgent.register(exports.SessionDb);
//# sourceMappingURL=session.database.js.map