// Create a human readable time format using the date time object

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
let hour = now.getHours() % 12 < 10 ? "0" + now.getHours() % 12 : now.getHours();
let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

console.log(`${year}-${month}-${date} ${hour}:${minutes}`)