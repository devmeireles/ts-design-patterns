import Message from "./message.class";
import IObserver from "./observer.interface";

export default class Receiver implements IObserver {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    onMessage(message: Message): string {
        const notification = `${this.name} you have a message: ${message.getMessage()}`;
        console.log(notification);
        return notification;
    }
}
