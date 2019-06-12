// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add7 = makeAdder(7);
console.log(add5(2));
console.log(add7());
console.log(add5(8));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;
  return function() {
    counter += 1;
    console.log(counter);
  };
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
newCounter();
newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;

  return {
    increment: () => {
      counter += 1;
      return counter;
    },
    decrement: () => {
      counter -= 1;
      return counter;
    }
  };
};

const newFactory = counterFactory();
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.decrement());
