"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
let Database = class Database {
    register(db) {
        this.db = db;
    }
    async Create(data) {
        const result = await (await this.db.create(data)).save();
        return result;
    }
    async Find(filters) {
        const result = await this.db.findOne(filters).lean().exec();
        return result;
    }
    async Get(filters, pagination, sorting) {
        const numericPage = (0, lodash_1.toNumber)(pagination?.page ?? 1);
        const numericPageSize = (0, lodash_1.toNumber)(pagination?.pageSize ?? 999);
        const skip = (numericPage - 1) * numericPageSize;
        const data = await this.db.find(filters).sort({ dateCreated: -1, ...sorting }).skip(skip).limit(numericPageSize).lean().exec();
        const total = await this.db.countDocuments(filters);
        return {
            data: data,
            pagination: {
                page: numericPage,
                pageSize: numericPageSize,
                totalItems: total
            }
        };
    }
    async Update(filters, data) {
        const options = {
            new: true,
            runValidators: true
        };
        const result = await this.db.findOneAndUpdate(filters, { $set: data }, options);
        return result;
    }
    async UpdateAll(filters, data) {
        const result = await this.db.updateMany(filters, { $set: data });
        return null;
    }
    async Delete(filters) {
        await this.db.findOneAndUpdate(filters, { $set: { isDeleted: true } });
        return null;
    }
    async DeleteAll(filters) {
        await this.db.updateMany(filters, { $set: { isDeleted: true } });
        return null;
    }
};
exports.Database = Database;
exports.Database = Database = __decorate([
    (0, common_1.Injectable)()
], Database);
//# sourceMappingURL=database.js.map