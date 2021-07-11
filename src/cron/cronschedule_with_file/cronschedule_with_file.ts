import fs from 'fs';
import cron from 'node-cron';

export class CronScheduleFile {
    constructor() {}

    runningCronSchedulerFile = () => {
        cron.schedule('*/5 * * * * *', () => {
            let fileString = `CronSchedulerFile ${new Date().toISOString()} [INFO] : [Running Cron Scheduler] : [${Math.floor(Math.random() * 1000).toString()}] \n`;
            fs.appendFile('cron_logs.txt', fileString, (err) => {
                if (err) throw err;
            });
        });
    };
}
