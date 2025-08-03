"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
const class_transformer_1 = require("class-transformer");
class Mapper {
    static map(data, klass) {
        if (!data)
            throw new Error("Invalid map data.");
        const mapped = (0, class_transformer_1.plainToInstance)(klass, data, { excludeExtraneousValues: true });
        for (let key of Object.keys(mapped)) {
            if (mapped[key] === undefined)
                delete mapped[key];
        }
        return mapped;
    }
}
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.util.js.map