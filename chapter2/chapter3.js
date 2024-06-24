// funtion declaration
function greet() {
  console.log("hello");
}


// function expresssion
const speak = function(name) {
  console.log(`good day ${name}`);
};

// regular function
const calcArea1 = function(radius) {
  return 3.14 * radius ** 2;
}


// arrow function
const calcArea = radius => 3.14 * radius ** 2;

const greatArrow  = () => 'hello';

// greet();
speak('mario');
const area = calcArea(5);
// console.log(area);

const result = greatArrow();
// console.log(result);



// ex 1
const bill = function(products, tax) {
  let total = 0;
  for (let i = 0; i< products.length; i++) {
    total += products[i] + products[i] * tax;
  }

  return total;
}

const billArrow = (products, tax) =>{
  let total = 0;
  for (let i = 0; i< products.length; i++) {
    total += products[i] + products[i] * tax;
  }

  return total;
}

console.log(bill([10, 15, 30], 0.2));