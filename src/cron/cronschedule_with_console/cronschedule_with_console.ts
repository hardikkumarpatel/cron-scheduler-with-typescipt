import cron from 'node-cron';

export class CronScheduleConsole {
    constructor() {}

    public runningCronSchedulerConsole = () => {
        cron.schedule('*/5 * * * * *', () => {
            //Run Cron scheduler in every 5 seconds.
            try {
                this.infoMessages('Running Cron Scheduler');
            } catch (error) {
                this.errorMessage(error);
            }
        });
    };

    private infoMessages = (message: string, object?: any) => {
        console.log(`CronSchedulerConsole ${new Date().toISOString()} [INFO] : [${message}] : [${Math.floor(Math.random() * 1000).toString()}]`);
    };

    private errorMessage = (message: string, object?: any) => {
        console.log(`CronSchedulerConsole ${new Date().toISOString()} [ERROR] : [${message}]`);
    };
}
