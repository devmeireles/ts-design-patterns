import ConcreteStrategyA from "./concreteStrategyA.class";
import ConcreteStrategyB from "./concreteStrategyB.class";
import Context from "./context.class";

const context = new Context(new ConcreteStrategyA);
console.log('Client: Strategy is set to normal sorting.');
context.businessLogic();

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.businessLogic();