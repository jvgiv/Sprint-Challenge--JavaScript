// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(num1, num2, callbackFunction) {
  return callbackFunction(num1, num2);
}



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, 
  * nice to meet you!"
*/
//add
function add(num1, num2) {
  return (num1 + num2);
}


//multiply
function multiply(num1, num2) {
  return (num1 * num2);
}


//greeting
function greeting(num1, num2) {
  return (`Hello ${num1} ${num2}, nice to meet you!`);
}




/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//its just the way closure works.  myFunction has access to external the same way nestedFunction has access to internal.  They 
//can go one level up from their nest to grab items.  They just cannot bleed out into the global scope to grab variables when nested.  you could nest 
//you could grab internal variables if you are several layers down nesting wise.  But you cant go global when that deep


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();