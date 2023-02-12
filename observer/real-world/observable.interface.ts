import Message from "./message.class";

export default interface IObservable {
    sendMessage(message: Message): any
}