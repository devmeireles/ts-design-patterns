import ExternalLog from "./externalLog.class";
import Adapter from "./adapter.class";
import LocalLog from "./localLog.class";

function clientCode(localLog: LocalLog) {
    console.log(localLog.sendLog('message from localLog'));
}

const now = new Date().getTime();

console.log('logging witht LocalLog');
const localLog = new LocalLog();
clientCode(localLog);

const externalLog = new ExternalLog();
console.log(externalLog.sendExternalLog('message from externallogger', now));

const adapterLog = new Adapter(externalLog);
clientCode(adapterLog);