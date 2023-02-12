import ExternalLog from "./externalLog.class";
import LocalLog from "./localLog.class";

export default class Adapter extends LocalLog {
    private externalLogger: ExternalLog;

    constructor(externalLogger: ExternalLog) {
        super();
        this.externalLogger = externalLogger
    }

    public sendLog(message: string): void {
        this.externalLogger.sendExternalLog(message, new Date().getTime());
    }
}