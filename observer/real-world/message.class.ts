export default class Message {
    message: string;
    author: string;

    constructor(message: string, author: string) {
        this.message = message;
        this.author = author;
    }

    getMessage(): string {
        return `${this.author} just said: ${this.message};`
    }
}