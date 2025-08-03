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
exports.IExamResponse = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
let IExamResponse = class IExamResponse {
    static Send(response, res) {
        res.status(response.code).send(response);
    }
    static OnClose(res, callback) {
        res.once('close', callback);
    }
    static Custom(data) {
        return {
            success: data.success ?? true,
            code: data.code ?? common_1.HttpStatus.OK,
            data: data.data ?? null,
            status: data.status ?? "SUCCESS",
            message: data.message ?? "Completed successfully."
        };
    }
    static Success(data) {
        return {
            success: true,
            code: common_1.HttpStatus.OK,
            data: data.data ?? null,
            status: data.status ?? "SUCCESS",
            message: data.message ?? "Completed successfully."
        };
    }
    static Failure(data) {
        return {
            success: false,
            code: common_1.HttpStatus.BAD_REQUEST,
            data: data.data ?? null,
            status: "FAILED",
            message: data.error ?? "An error occured during request execution."
        };
    }
    static Error(data) {
        return {
            success: false,
            code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            data: data.data ?? null,
            status: "FAILED",
            message: data.error ?? "An error occured during request execution."
        };
    }
    static Create(data) {
        return {
            success: true,
            code: common_1.HttpStatus.CREATED,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Created successfully."
        };
    }
    static Update(data) {
        return {
            success: true,
            code: common_1.HttpStatus.OK,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Updated successfully."
        };
    }
    static Fetch(data) {
        return {
            success: true,
            code: common_1.HttpStatus.OK,
            pagination: data.pagination ? {
                page: data.pagination.page ?? 1,
                pageSize: data.pagination.pageSize ?? 1,
                totalItems: data.pagination.totalItems ?? 0,
                totalPages: data.pagination.totalItems && data.pagination.pageSize ? Math.ceil(data.pagination.totalItems / data.pagination.pageSize) : 1
            } : null,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Fetched successfully."
        };
    }
    static Delete(data) {
        return {
            success: true,
            code: common_1.HttpStatus.OK,
            data: data.data ?? null,
            status: "SUCCESS",
            message: data.message ?? "Deleted successfully."
        };
    }
    static Unauthorised(message) {
        return {
            success: false,
            code: common_1.HttpStatus.UNAUTHORIZED,
            data: null,
            status: "UNAUTHORISED",
            message: message ?? "Unauthorised request."
        };
    }
};
exports.IExamResponse = IExamResponse;
__decorate([
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [IExamResponse, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Object)
], IExamResponse, "Send", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object, Function]),
    __metadata("design:returntype", void 0)
], IExamResponse, "OnClose", null);
exports.IExamResponse = IExamResponse = __decorate([
    (0, common_1.Injectable)()
], IExamResponse);
//# sourceMappingURL=response.helper.js.map