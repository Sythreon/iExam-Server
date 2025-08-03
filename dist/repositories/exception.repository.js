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
exports.ExceptionRepository = void 0;
const common_1 = require("@nestjs/common");
const exception_entity_1 = require("../constants/entities/exception.entity");
const exception_database_1 = require("../data/database/exception.database");
const response_helper_1 = require("../helpers/response.helper");
const mapper_util_1 = require("../utilities/mapper.util");
let ExceptionRepository = class ExceptionRepository {
    constructor() {
    }
    static async CreateException(data) {
        const exception = mapper_util_1.Mapper.map(data, exception_entity_1.Exception);
        const newException = await exception_database_1.ExceptionDataAgent.Create(exception);
        return response_helper_1.IExamResponse.Create({ data: newException, message: "Exception created successfully." });
    }
    static async DeleteException(exceptionId) {
        const exception = await exception_database_1.ExceptionDataAgent.Find({ exceptionId });
        if (!exception)
            return response_helper_1.IExamResponse.Failure({ error: "Exception not found." });
        await exception_database_1.ExceptionDataAgent.Delete({ exceptionId });
        return response_helper_1.IExamResponse.Delete({ data: null, message: "Exception deleted successfully." });
    }
    static async GetExceptions(filters) {
        const { page, pageSize, ...query } = filters;
        const exceptions = await exception_database_1.ExceptionDataAgent.Get(query, { page, pageSize });
        return response_helper_1.IExamResponse.Fetch({
            data: exceptions.data,
            pagination: exceptions.pagination,
            message: "Exceptions fetched successfully."
        });
    }
    static async FindException(exceptionId) {
        const exception = await exception_database_1.ExceptionDataAgent.Find({ exceptionId });
        if (!exception)
            return response_helper_1.IExamResponse.Failure({ error: "Exception not found." });
        return response_helper_1.IExamResponse.Success({ data: exception, message: "Exception fetched successfully." });
    }
};
exports.ExceptionRepository = ExceptionRepository;
exports.ExceptionRepository = ExceptionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ExceptionRepository);
//# sourceMappingURL=exception.repository.js.map