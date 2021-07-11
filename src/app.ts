import express from 'express';

export class App {
    public _appInstance: any;

    constructor() {
        this._appInstance = express();
    }
}
