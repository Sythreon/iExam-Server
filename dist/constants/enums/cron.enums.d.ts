export declare enum CronTypeEnum {
    EVERY_SECOND = "* * * * * *",
    EVERY_MINUTE = "0 * * * * *",
    EVERY_HOUR = "0 0 * * * *",
    DAILY = "0 0 0 * * *",
    WEEKLY = "0 0 0 * * 0",
    MONTHLY = "0 0 0 1 * *",
    YEARLY = "0 0 0 1 1 *"
}
