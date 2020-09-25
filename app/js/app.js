document.addEventListener("DOMContentLoaded", function() {

	// 1 Переменне
	// camelCase
	// const firstName = "Andrey"
	// const lastName = "Samarin" // string
	// let age = 31 // number
	// const isProgrammer = true // boolean

	// const   = 'private'
	// const $ = 'some value'

	// const if = 'mkef' // err
	// const withNum = '5'

	// ---------------------------------------------------------------------	
	// 2 Мутирование
	// console.log('Имя человека: ' + firstName + ', а возраст еловека: ' + age)
	// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

	// const lastName = prompt('Введите фамилию')
	// console.log('Имя человека: ' + firstName + ', Фамилия: ' + lastName)

	// ---------------------------------------------------------------------	
	// 3 Операторы
	// let currentYear = 2020
	// const birthYear = 1993

	// const age = currentYear + birthYear

	// const a = 10
	// const b = 5

	// let c = 32
	// c = c + a
	// c += a
	// c -= a
	// c *= a
	// c /= a

	// console.log(a + b)
	// console.log(a - b)
	// console.log(a * b)
	// console.log(a / b)
	// console.log(currentYear++)
	// console.log(++currentYear)
	// console.log(--currentYear)
	// console.log(currentYear)
	// console.log(c)

	// ---------------------------------------------------------------------	
	// 4 Типы данных
	// const isProgrammer = true
	// const name = 'Andrey'
	// const age = '31'
	// let x 
	// console.log(typeof isProgrammer)
	// console.log(typeof name)
	// console.log(typeof age)
	// console.log(typeof x)
	// console.log(null)

	// ---------------------------------------------------------------------	
	// 5 Приоритет операторов
	// const fullAge = 31
	// const birdYear = 1989
	// const currentYear = 2020

	// // > < >= <=
	// const isFullAge = currentYear - birdYear >= fullAge // 
	// console.log(isFullAge)

	// ---------------------------------------------------------------------	
	// 6 Условные операторы
	// const courseStatus = 'ready' // ready, fail, pending

	// if (courseStatus === 'ready') {
	// 	console.log('Курс уже готов и его можно проходить')
	// } else if (courseStatus === 'pending') {
	// 	console.log('Курс пока находится в процессе разработке')
	// } else {
	// 	console.log('Курс не получился')
	// }

	const isReady = false

	// if (isReady) {
	// 	console.log('Всё готово')
	// } else {
	// 	console.log('Всё не готово!')
	// }

	isReady ? console.log('Всё готово!') : console.log('Всё не готово!')


	// const num1 = 42 // number
	// const num2 = '42' // string

	// console.log(num1 === num2)

});
