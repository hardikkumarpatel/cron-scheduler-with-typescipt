import { App } from './app';
import dotenv from 'dotenv';
dotenv.config();
import cron from 'node-cron';
import { CronScheduleConsole } from './cron/cronschedule_with_console/cronschedule_with_console';
import { CronScheduleFile } from './cron/cronschedule_with_file/cronschedule_with_file';

export class Server {
    public _serverInstance: App;
    private HOST: string;
    private PORT: number;
    private BACKLOG: number;
    private _cronSchedulerConsole: CronScheduleConsole;
    private _cronSchedulerFile: CronScheduleFile;
    constructor() {
        this._serverInstance = new App();
        this._cronSchedulerConsole = new CronScheduleConsole();
        this._cronSchedulerFile = new CronScheduleFile();
        this.connetApp();
        this._cronSchedulerConsole.runningCronSchedulerConsole();
        this._cronSchedulerFile.runningCronSchedulerFile();
    }

    connetApp = () => {
        this.HOST = process.env.HOST || '127.0.0.1';
        this.PORT = parseInt(process.env.POST, 10) || 5000;
        this.BACKLOG = parseInt(process.env.BACKLOG, 10) || 5000;
        this._serverInstance._appInstance.listen(this.PORT, this.BACKLOG, () => {
            console.log(`Server is running on:[${this.PORT}]`);
        });
    };

    runCronScheduler = () => {
        cron.schedule('*/10 * * * * *', () => {
            console.log('running a task every 10 second', Math.random());
        });
    };
}
