// import VendingMachine from './lib/vending-machine';
import app from './lib/app';

// multi property variables need to be handled in a special way.

interface Greeting {
  text: string;
}

function logger(greeting: Greeting): void {
  console.log(greeting.text);
  return;
}

app.start(3000);
