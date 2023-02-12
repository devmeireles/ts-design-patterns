import Message from "./message.class";

export default interface IObserver {
    onMessage(message: Message): string;
}