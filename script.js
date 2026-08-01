"use strict";

function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64;
}

console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));
