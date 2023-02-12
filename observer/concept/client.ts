import ConcreteSubject from './concreteSubject.class';
import ConcreteObserverA from './concreteOberserA.class';
import ConcreteObserverB from './concreteObserserB.class';

const subject = new ConcreteSubject();

const observerA = new ConcreteObserverA();
subject.attach(observerA);

const observerB = new ConcreteObserverB();
subject.attach(observerB);

subject.businessLogic();
subject.businessLogic();

subject.detach(observerB);

subject.businessLogic();