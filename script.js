"use strict";

function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64;
}

console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

const checkMultiplicity = function (n1, n2) {
  return n1 % n2 === 0;
};

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));
