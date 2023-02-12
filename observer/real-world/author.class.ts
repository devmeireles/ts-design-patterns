import Message from "./message.class";
import IObservable from "./observable.interface";
import Receiver from "./receiver.class";

export default class Author implements IObservable {
    protected observers: Receiver[] = [];

    notify(message: Message) {
        this.observers.forEach(observer => {
            observer.onMessage(message)
        })
    }

    subscribe(observer: Receiver) {
        this.observers.push(observer);
    }

    sendMessage(message: Message) {
        this.notify(message)
    }
}