import Author from "./author.class";
import Message from "./message.class";
import Receiver from "./receiver.class";

const receiver1 = new Receiver("John");
const receiver2 = new Receiver("Doe");

const author = new Author();
author.subscribe(receiver1);
author.subscribe(receiver2);

const message = new Message("Fresh and cool guys!", "Gabe");

author.sendMessage(message);