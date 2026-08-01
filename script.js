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

function isParamNotAble(param) {
  if (typeof param !== "number" || Number.isNaN(param) || param < 0)
    return true;
}

const calculateSurfaceArea = function (shapeType, param1, param2) {
  if (isParamNotAble(param1)) return 0;

  if (typeof shapeType !== "string") return 0;
  const shape = shapeType.toLowerCase();

  switch (shape) {
    case "cube":
      return 6 * param1 ** 2;
    case "cylinder":
      if (isParamNotAble(param2)) return 0;
      return 2 * Math.PI * param1 * (param1 + param2);
    default:
      return 0;
  }
};

console.log(calculateSurfaceArea("cube", 5));
console.log(calculateSurfaceArea("cylinder", 3, 5));
console.log(calculateSurfaceArea("CUBE", 4));
console.log(calculateSurfaceArea("cube", -5));
console.log(calculateSurfaceArea("cylinder", 3));
console.log(calculateSurfaceArea("sphere", 5));
console.log(calculateSurfaceArea(123, 5));
