document.addEventListener("DOMContentLoaded", function() {

	// 1 Переменне
	// camelCase
	const firstName = "Andrey"
	// const lastName = "Samarin" // string
	let age = 26 // number
	const isProgrammer = true // boolean

	// const   = 'private'
	const $ = 'some value'

	// const if = 'mkef' // err
	const withNum = '5'

	// ---------------------------------------------------------------------	
	// 2 Мутирование
	// console.log('Имя человека: ' + firstName + ', а возраст еловека: ' + age)
	// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

	const lastName = prompt('Введите фамилию')
	console.log('Имя человека: ' + firstName + ', Фамилия: ' + lastName)

});
