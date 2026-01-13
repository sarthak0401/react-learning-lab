// Es-6 fundamentals

let a = true;
let b = false;

// console.log(a&&b);
console.log(b && a); // This will only check for the first expression only, if its false second expression will never be checked, short circuiting

// For || or operator for the condition to be true, it'll be true immediately if the first condition is true, second expression will never be evaluated/checked
console.log(a || console.log("Meow"));
console.log("Meow" || a);



const user_name = "Sarthak";



// Template literals
console.log(`Hi there, ${user_name}`);




// Ternary operator
const x = true;
x ? console.log("Condition true") : console.log("Condition false");




// De-structuring arrays and objects (Using short-hand's)

const id = 1;
const productName = "Cappuccino";
const rating = 5;

// This is an object
/*
const product1 = {
    id: id, 
    productName : productName,
    rating : rating    
};

console.log(product1);

*/

// We can use the below shorthand too
const product1 = {
  id,
  productName,
  rating,
}; // It will automatically assign these key those values defined about with same key names

console.log(product1);

const product2 = {
  description: "Product 2's description",
  id,
  productName,
  rating,
};

// To get the attribute value from a product
const getProductDescription = product2.description;
console.log(getProductDescription);

// We can use the short-hand to get the attribute values from the objects directly

//   {} Used this because its (product2) an object
const { description } = product2;
console.log(description);

// For arrays : destructuring
const arr = [1, 2, 3, 4];
const getFirstValue = arr[0];
const getSecondValue = arr[1];
console.log(getFirstValue, getSecondValue);

// short-hand
const [arrayFirstElem, arraySecondElem] = arr;
console.log(arrayFirstElem, arraySecondElem);

// If we try to access a position which is not present, it will show undefined
const [num1, num2, num3, num4, num5] = arr;
console.log(num1, num2, num3, num4, num5);
// See the fifth one will be showing undefined




// Default parameters, spread and rest operators

// Default parameters
function multOfTwoNumbers(num1 = 5, num2 = 10) {
  return num1 * num2;
}

console.log(multOfTwoNumbers()); // If we dont pass any arguments it will consider the default parameter values
console.log(multOfTwoNumbers(1, 2)); // THis will override the default parameters

console.log(multOfTwoNumbers(15)); // This will be considered as the first parameter and second parameter's value will be taken from default one



// Spread operator
const arr2 = [1, 2, 3, 4, 5];
console.log(...arr2);
// Spread operator can be used to get the array elements one by one

console.log([...arr2]); // THis will output an array using the elements of arr2

const arr3 = [99, 88, 77];
console.log(...arr2, ...arr3);
console.log([...arr2, ...arr3]); // we can merge two arrays into other array as well

console.log([10010, ...arr2, 55, ...arr3, 9923929]); // This creates a whole array including this elements

//  ... -> this is the spread operator



// Rest operator
function getVal(a, b, c) {
  console.log(a, b, c);

  return "Meow";
}

console.log(getVal(1, 2, 4));
// If we want to pass a lot of parameters to a function, then we need to use the rest operator(spread operator) in the function parameter list while defining it

function getVal(a, b, ...c) {
  console.log(a, b, c);

  return "Meow";
}

console.log(getVal(1, 2, 4, 5, 6, 7, 8, 8, 9, 90, 78, 9768, 65)); // This will take the first two values as a and b then the rest of the arguments will be captured by rest operator(Spread operator) as an array

// NOTE : The rest operator (parameter) ALWAYS have to be at the end of the parameter list. THis is Not acceptable : function getVal(...c, a,b){}




// map, filter, find, some, every, includes, indexOf, findIndex

const person = [  // this is the array of objects
  {
    name: "Person 1",
    age: 22,
    country: "India",
  },
  {
    name: "Person 2",
    age: 25,
    country: "Sweden",
  },
  {
    name: "Person 3",
    age: 27,
    country: "Russia",
  },
];

// map gets applied on all the elements of the array

// NOTE: The .map() Array Method
/* If you are using the .map() method on an Array, it provides three arguments to your callback function in this specific order:

Value (the current element)

Index (the numerical position)

Array (the original array being mapped)
*/


// singlePerson is the current element
let getAllNames = person.map((singlePerson, index) => {
    console.log(singlePerson, index);
    // return singlePerson.name;
    return `Name : ${singlePerson.name}, Age : ${singlePerson.age}`
});

console.log(getAllNames);