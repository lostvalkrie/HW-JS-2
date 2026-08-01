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

/**
 * Validates if the given parameter is a valid positive number.
 * @param {number} param - The value to check.
 * @param {number} [minVal=0] - The minimum threshold value.
 * @returns {boolean} True if the parameter is invalid or out of bounds, false otherwise.
 */
function isParamNotAble(param, minVal = 0) {
  if (typeof param !== "number" || Number.isNaN(param) || param <= minVal)
    return true;
}

/**
 * Calculates the surface area of a 3D shape (cube or cylinder).
 * @param {string} shapeType - The type of shape ("cube" or "cylinder").
 * @param {number} param1 - The edge length of the cube or radius of the cylinder.
 * @param {number} [param2] - The height of the cylinder.
 * @returns {number} The calculated surface area, or 0 if inputs are invalid.
 */
const calculateSurfaceArea = function (shapeType, param1, param2) {
  if (isParamNotAble(param1, 0)) return 0;

  if (typeof shapeType !== "string") return 0;
  const shape = shapeType.toLowerCase();

  switch (shape) {
    case "cube":
      return 6 * param1 ** 2;
    case "cylinder":
      if (isParamNotAble(param2, 0)) return 0;
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

const calculatePaintBoxes = function (area, layersCount = 1) {
  if (isParamNotAble(area, 0) || isParamNotAble(layersCount, 0)) return 0;

  const ONE_BOX_CAN_FILL = 10;
  const FULL_AREA = area * layersCount;

  return Math.ceil(FULL_AREA / ONE_BOX_CAN_FILL);
};

let cylinderArea = calculateSurfaceArea("cylinder", 3, 5);
let cubeArea = calculateSurfaceArea("cube", 5);

console.log(calculateSurfaceArea("cube", 5));
console.log(calculateSurfaceArea("cylinder", 3, 5));
console.log(calculateSurfaceArea("cube", -5));
console.log(calculatePaintBoxes(cylinderArea, 3));
console.log(calculatePaintBoxes(cubeArea));
console.log(calculatePaintBoxes(0, 3));

const shapeType = "cylinder";
const layersCount = 3;
const area = calculateSurfaceArea(shapeType, 3, 5);

const boxes = calculatePaintBoxes(area, layersCount);

if (boxes === 0) {
  console.log("Неможливо виконати розрахунок через некоректні дані.");
} else {
  console.log(
    `Для фарбування фігури ${shapeType} у ${layersCount} шарів необхідно придбати ${boxes} банок фарби.`,
  );
}
