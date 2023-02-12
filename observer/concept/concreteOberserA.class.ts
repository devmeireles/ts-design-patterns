import Observer from "./observer.interface";
import Subject from "./subject.interface";
import ConcreteSubject from "./concreteSubject.class";

export default class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}