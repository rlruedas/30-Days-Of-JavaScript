// let base = prompt('Enter a number for base')
// let height = prompt('Enter a number for height')
// let area = .5 * base * height

// alert(`The area of the triangle is: ${area}`)

// let sideA = prompt('Enter side a')
// let sideB = prompt('Enter side b')
// let sideC = prompt('Enter side c')
// let perimeter = Number(sideA) + Number(sideB) + Number(sideC)

// alert(`The perimeter of the triangle is: ${perimeter}`)

// let length = prompt('Enter a number for length');
// let width = prompt('Enter a number for width');
// let rectArea = length * width
// let rectPerimeter = 2 * (Number(length) + Number(width))

// alert(`The Area of the rectangle is : ${rectArea} while the perimeter of the rectangle is : ${rectPerimeter}`)


// const pi = 3.14
// let radius = prompt("Enter a number for radius")
// let circRad = pi * radius * radius
// let circCircumference = 2 * pi * radius

// alert(`The area of the circle is: ${circRad} while the circumference is: ${circCircumference} `)

// let x = 0;
// let y = 0;
// let m1 = 2;
// let b = -2;
// let xIntersect = m1 / b
// let yIntersect = m1 * x - b

// console.log(`slope x and y Intercept: (${[xIntersect, y]}), (${[x, b]})`)

// let [x1, y1] = [1, 0]
// let [x2, y2] = [0, -2]
// let m2 = (y2 - y1)/(x2 - x1)
// console.log(m2)
// console.log(m1 === m2)

// let yValue = Math.pow(3,2) + 6 * (-3) + 9
// console.log(yValue)

// let hours = prompt('Enter Hours:')
// let ratePerHour = prompt('Enter rate per hour:')
// console.log(`Your Weekly Earning is ${hours * ratePerHour}`)

// console.log('reister'.length > 7 ? 'my name is long' : 'my name is short')

// let firstName = 'Reister'
// let lastName = 'Ruedas'
// let compare = firstName.length > lastName.length

// console.log(compare ? `Your first name, ${firstName} is longer than your family name, ${lastName}` : `Your family name, ${lastName} is longer than your first name, ${firstName}`)

// let myAge = 250
// let yourAge = 25

// console.log(`I am ${myAge - yourAge} years older than you`)

// let year = new Date().getFullYear()
// let birthYear = Number(prompt('Enter Birth Year:'))
// let yourAge = year - birthYear

// console.log( yourAge >= 18 ? `You are ${yourAge}. You are old enough to drive` : `You are ${yourAge}, you will be allowed to drive after ${18 - yourAge} year/s`)

// let noYears = Number(prompt("Enter number of years you live"));
// let months = 12;
// let days = 365;
// let hours = 24;
// let min = 60;
// let seconds = 60;

// let result = (seconds * min * hours * days) * noYears 
// console.log(`You lived ${result} seconds.`)

// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
// let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
// let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
// let min = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

// console.log(`${year}-${month}-${date} ${hours}:${min}`)
// console.log(`${month}-${date}-${year} ${hours}:${min}`)
// console.log(`${date}/${month}/${year} ${hours}:${min}`)