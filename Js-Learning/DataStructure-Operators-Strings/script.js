"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 4, 5, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];
console.log(a, b, c, d);

// Destructuring the array directly
const [x, y, z, p] = arr;
console.log(x, y, z, p);

// We can skip one element in the array by doing the following operation , ,
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Now if we want to swap the values between main and secondary, we have two options

/*
// Option1 -> using temp variable
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

// Option2 -> To create an array with these two values and destructure them on the LHS (Easy Swapping)
[main, secondary] = [secondary, main]; // RHS is the array with these two values, and LHS is the destructuring of it
console.log(main, secondary);


