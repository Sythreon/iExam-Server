"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerDataAgent = exports.AnswerDb = exports.AnswerSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const database_1 = require("./database");
const generator_util_1 = require("../../utilities/generator.util");
const answer_middleware_1 = require("../middlewares/answer.middleware");
const schema = {
    answerId: { type: String, default: generator_util_1.Generator.GenerateObjectID },
    questionId: { type: String },
    sessionId: { type: String },
    chosenOption: { type: String },
    dateCreated: { type: Number, default: Date.now },
    isDeleted: { type: Boolean, default: false }
};
exports.AnswerSchema = (0, answer_middleware_1.ApplyAnswerMiddleware)(new mongoose_1.Schema(schema));
;
exports.AnswerDb = (0, mongoose_2.model)('answers', exports.AnswerSchema);
exports.AnswerDataAgent = new database_1.Database();
exports.AnswerDataAgent.register(exports.AnswerDb);
//# sourceMappingURL=answer.database.js.map