import { SchedulerRegistry } from '@nestjs/schedule';
export declare class CronService {
    private schedulerRegistry;
    constructor(schedulerRegistry: SchedulerRegistry);
    handleMinutelyTask(): Promise<void>;
    handleHourlyTask(): Promise<void>;
    handleDailyTask(): Promise<void>;
    handleWeekyTask(): void;
    handleMonthlyTask(): void;
    handleYearyTask(): void;
    stopCronJob(name: string): void;
}
