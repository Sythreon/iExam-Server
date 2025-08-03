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
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const cron_enums_1 = require("../constants/enums/cron.enums");
const exam_tasks_1 = require("../tasks/exam.tasks");
let CronService = class CronService {
    constructor(schedulerRegistry) {
        this.schedulerRegistry = schedulerRegistry;
    }
    async handleMinutelyTask() {
        console.log('Running minutely task');
        await exam_tasks_1.ExamTasks.timeOutSessions();
    }
    async handleHourlyTask() {
        console.log('Running hourly task');
    }
    async handleDailyTask() {
        console.log('Running daily task');
    }
    handleWeekyTask() {
        console.log('Running weekly task');
    }
    handleMonthlyTask() {
        console.log('Running monthly task');
    }
    handleYearyTask() {
        console.log('Running monthly task');
    }
    stopCronJob(name) {
        const job = this.schedulerRegistry.getCronJob(name);
        if (job) {
            job.stop();
            console.log(`Job ${name} stopped`);
        }
        else {
            console.log(`Job ${name} not found`);
        }
    }
};
exports.CronService = CronService;
__decorate([
    (0, schedule_1.Cron)(cron_enums_1.CronTypeEnum.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "handleMinutelyTask", null);
__decorate([
    (0, schedule_1.Cron)(cron_enums_1.CronTypeEnum.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "handleHourlyTask", null);
__decorate([
    (0, schedule_1.Cron)(cron_enums_1.CronTypeEnum.DAILY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "handleDailyTask", null);
__decorate([
    (0, schedule_1.Cron)(cron_enums_1.CronTypeEnum.WEEKLY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "handleWeekyTask", null);
__decorate([
    (0, schedule_1.Cron)(cron_enums_1.CronTypeEnum.MONTHLY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "handleMonthlyTask", null);
__decorate([
    (0, schedule_1.Cron)(cron_enums_1.CronTypeEnum.YEARLY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "handleYearyTask", null);
exports.CronService = CronService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_1.SchedulerRegistry])
], CronService);
//# sourceMappingURL=cron.service.js.map