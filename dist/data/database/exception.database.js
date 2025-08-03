"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionDataAgent = exports.ExceptionDb = exports.ExceptionSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const database_1 = require("./database");
const generator_util_1 = require("../../utilities/generator.util");
const exception_middleware_1 = require("../middlewares/exception.middleware");
const common_1 = require("@nestjs/common");
const schema = {
    exceptionId: { type: String, default: generator_util_1.Generator.GenerateObjectID },
    sessionId: { type: String },
    method: { type: String },
    url: { type: String },
    code: { type: Number, default: common_1.HttpStatus.INTERNAL_SERVER_ERROR },
    message: { type: String },
    date: { type: Number, default: Date.now() }
};
exports.ExceptionSchema = (0, exception_middleware_1.ApplyExceptionMiddleware)(new mongoose_1.Schema(schema));
;
exports.ExceptionDb = (0, mongoose_2.model)('exceptions', exports.ExceptionSchema);
exports.ExceptionDataAgent = new database_1.Database();
exports.ExceptionDataAgent.register(exports.ExceptionDb);
//# sourceMappingURL=exception.database.js.map