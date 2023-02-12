import Observer from "./observer.interface";

export default interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}