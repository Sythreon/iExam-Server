"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionDataAgent = exports.QuestionDb = exports.QuestionSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const database_1 = require("./database");
const generator_util_1 = require("../../utilities/generator.util");
const question_middleware_1 = require("../middlewares/question.middleware");
const schema = {
    questionId: { type: String, default: generator_util_1.Generator.GenerateObjectID },
    content: { type: String },
    correctAnswer: { type: String },
    options: { type: [String] },
    dateCreated: { type: Number, default: Date.now },
    isDeleted: { type: Boolean, default: false }
};
exports.QuestionSchema = (0, question_middleware_1.ApplyQuestionMiddleware)(new mongoose_1.Schema(schema));
;
exports.QuestionDb = (0, mongoose_2.model)('questions', exports.QuestionSchema);
exports.QuestionDataAgent = new database_1.Database();
exports.QuestionDataAgent.register(exports.QuestionDb);
//# sourceMappingURL=question.database.js.map