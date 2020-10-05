document.addEventListener("DOMContentLoaded", function() {

	// 1. Фунция
	// Funcion Declaration
	// function greet(name) {
	// 	console.log('Привет - ', name)
	// }

	// Function Expression
	// const greet2 = function greet2(name) {
	// 	console.log('Привет2 - ', name)
	// } 

	// greet('Лена')
	// greet2('Лена')

	// console.log(typeof greet)
	// console.dir(greet)

	// 2. Анонимные функции
	// let counter = 0
	// const interval = setInterval(function() {
	// 	if (counter === 5) { 
	// 		clearInterval(interval)  // clearTimeout
	// 	} else {
	// 		console.log(++counter)
	// 	}		
	// }, 1000)

	// 3. Стрелочные функции
	// const arrow1 = (name) => {
	// 	console.log('Привет - ', name)
	// }
	// arrow1('Andrey')

	// const arrow2 = name => console.log('Привет - ', name)
	// arrow2('Andrey')

	// const pow2 = num => num ** 2
	// console.log(pow2(5))

	// 4. Параметры по умолчанию
	// const sum = (a = 40, b = a * 2) => a + b

	// console.log(sum(41, 1))
	// console.log(sum())

	function sumAll(...all) {
		let result = 0
		for (let num of all) {
			result += num
		}
		return result
	}

	const res = sumAll(1, 2, 3, 4, 5)
	console.log(res)

});


