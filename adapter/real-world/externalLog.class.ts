
export default class ExternalLog {
    public sendExternalLog(message: string, createAt: number): void {
        console.log(`${createAt}: ${message}`);
    }
}