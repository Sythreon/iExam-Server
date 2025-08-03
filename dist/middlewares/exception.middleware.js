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
exports.ExceptionMiddleware = void 0;
const common_1 = require("@nestjs/common");
const exception_repository_1 = require("../repositories/exception.repository");
const response_helper_1 = require("../helpers/response.helper");
let ExceptionMiddleware = class ExceptionMiddleware {
    constructor() { }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const body = request.body;
        const params = request.params;
        const query = request.query;
        const exceptionCode = exception.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionMessage = exception.message || JSON.stringify(exception);
        if (exceptionCode !== common_1.HttpStatus.FORBIDDEN || exceptionCode !== common_1.HttpStatus.UNAUTHORIZED) {
            await exception_repository_1.ExceptionRepository.CreateException({
                date: new Date().toISOString(),
                method: request.method.toString(),
                url: request.url,
                code: exceptionCode,
                message: exceptionMessage,
                metadata: JSON.stringify({ body, params, query })
            });
        }
        response
            .status(exceptionCode)
            .send(exceptionCode === common_1.HttpStatus.UNAUTHORIZED ?
            response_helper_1.IExamResponse.Unauthorised(exceptionMessage) :
            response_helper_1.IExamResponse.Error({ error: exceptionMessage, data: exception?.response }));
    }
};
exports.ExceptionMiddleware = ExceptionMiddleware;
exports.ExceptionMiddleware = ExceptionMiddleware = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [])
], ExceptionMiddleware);
//# sourceMappingURL=exception.middleware.js.map