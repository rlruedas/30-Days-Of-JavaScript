function fullName() {
  return "Reister L. Ruedas";
}

function fullNameWithParam(fname, lname) {
  return `${fname} ${lname}`;
}

function addNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function areaOfRectangle(length, width) {
  return length * width;
}

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

function areaOfCircle(radius) {
  return Math.PI * (radius * radius);
}

function circumOfCircle(radius) {
  return 2 * (Math.PI * radius);
}

function density(mass, volume) {
  return mass / volume;
}
function speed(distance, time) {
  return distance / (time * 60);
}

document
  .querySelector(".functions")
  .appendChild(document.createElement("h2"))
  .append(`Exercise Level 1`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#1 - ${fullName()}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#2 - ${fullNameWithParam("Reister", "Ruedas")}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#3 - ${addNumbers(11, 11)}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#4 - ${areaOfRectangle(10, 5)}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#5 - ${perimeterOfRectangle(10, 5)}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#6 - ${volumeOfRectPrism(10, 5, 2)}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#7 - ${areaOfCircle(3)}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#8 - ${circumOfCircle(3)}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#9 - ${density(5, 2)}`);

document
  .querySelector(".functions")
  .appendChild(document.createElement("h3"))
  .append(`#10 - ${speed(3600, 20)}`);
