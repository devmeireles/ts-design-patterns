import Subject from "./subject.interface";

export default interface Observer {
    update(subject: Subject): void;
}