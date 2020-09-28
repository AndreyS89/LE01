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

	// const isReady = false

	// if (isReady) {
	// 	console.log('Всё готово')
	// } else {
	// 	console.log('Всё не готово!')
	// }

	// Тернарное выражение
	// isReady ? console.log('Всё готово!') : console.log('Всё не готово!')


	// const num1 = 42 // number
	// const num2 = '42' // string

	// console.log(num1 === num2)

	// ---------------------------------------------------------------------	
	// 7 Булевая логика

	// ---------------------------------------------------------------------	
	// 8 Функции
	function calculateAge(year) {
		return 2020 - year
	}

	// const myAge = calculateAge(1989)
	// console.log(myAge)
	// console.log(calculateAge(1986))

	// function logInfoAbout(name, year) {
	// 	const age = calculateAge(year)

	// 	if (age > 0) {
	// 		console.log('Человек по имени ' + name + ' ему сейчас: ' + age)
	// 	} else {
	// 		console.log('Вообще-то это уже будущее!')
	// 	}		 
	// }

	// logInfoAbout('Andery', 2222)

	// ---------------------------------------------------------------------	
	// 9 Массивы
	// const cars = ['Mazda', 'Mercedes', 'Ford']
	// console.log(cars)
	// console.log(cars.length)
	// console.log(cars[0])
	// console.log(cars[1])
	// console.log(cars[2])

	// cars[0] = 'Porsche'
	// cars[2] = 'Mazda'
	// console.log(cars)

	// ---------------------------------------------------------------------	
	// 10 Циклы
	// const cars = ['Mazda', 'Mercedes', 'Ford']

	// for (let i = 0; i < cars.length; i++) {
	// 	const car = cars[i]
	// 	console.log(car)
	// }

	// for (let car of cars) {
	// 	console.log(car)
	// }

	// ---------------------------------------------------------------------	
	// 11 Объекты (группировка)
	const person = {
		firsName: 'Andrey',
		lastName: 'Samarin',
		year: 1989,
		languages: ['Ru', 'En', 'Fr']
	}

});


