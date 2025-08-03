// tasks.service.ts
import { Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { CronTypeEnum } from '../constants/enums/cron.enums';
import { ExamTasks } from '../tasks/exam.tasks';

@Injectable()
export class CronService {
  /**
   *
   */
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  // @Cron(CronTypeEnum.EVERY_SECOND)
  // handleSecondlyTask() {
  //   console.log('Running secondly task');
  //   // Your secondly task logic here
  // }

  @Cron(CronTypeEnum.EVERY_MINUTE)
  async handleMinutelyTask() {
    console.log('Running minutely task');
    // Your minutely task logic here

    await ExamTasks.timeOutSessions();
  }

  @Cron(CronTypeEnum.EVERY_HOUR)
  async handleHourlyTask() {
    console.log('Running hourly task');
  }

  @Cron(CronTypeEnum.DAILY)
  async handleDailyTask() {
    console.log('Running daily task');
    // Your daily task logic here

  }

  @Cron(CronTypeEnum.WEEKLY)
  handleWeekyTask() {
    console.log('Running weekly task');
    // Your weekly task logic here
  }

  @Cron(CronTypeEnum.MONTHLY)
  handleMonthlyTask() {
    console.log('Running monthly task');
    // Your monthly task logic here
  }

  @Cron(CronTypeEnum.YEARLY)
  handleYearyTask() {
    console.log('Running monthly task');
    // Your yearly task logic here
  }

  // @Timeout(5000) // Runs once after 5,000 milliseconds
  // handleTimeout() {
  //   console.log('Timeout job executed');
  //   // Place your logic for the timeout job here
  // }

  stopCronJob(name: string) {
    const job = this.schedulerRegistry.getCronJob(name);
    if (job) {
      job.stop();
      console.log(`Job ${name} stopped`);
    } else {
      console.log(`Job ${name} not found`);
    }
  }
}
