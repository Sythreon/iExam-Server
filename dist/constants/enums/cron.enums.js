"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronTypeEnum = void 0;
var CronTypeEnum;
(function (CronTypeEnum) {
    CronTypeEnum["EVERY_SECOND"] = "* * * * * *";
    CronTypeEnum["EVERY_MINUTE"] = "0 * * * * *";
    CronTypeEnum["EVERY_HOUR"] = "0 0 * * * *";
    CronTypeEnum["DAILY"] = "0 0 0 * * *";
    CronTypeEnum["WEEKLY"] = "0 0 0 * * 0";
    CronTypeEnum["MONTHLY"] = "0 0 0 1 * *";
    CronTypeEnum["YEARLY"] = "0 0 0 1 1 *";
})(CronTypeEnum || (exports.CronTypeEnum = CronTypeEnum = {}));
//# sourceMappingURL=cron.enums.js.map