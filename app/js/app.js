document.addEventListener("DOMContentLoaded", function() {

    // 1. Массивы
    const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес',]	

    const people = [
        {name: 'Andrey', budget: 4200},
        {name: 'Elena', budget: 3500},
        {name: 'Victoria', budget: 1700}
    ]

    const fib = [1, 1, 2, 3, 5, 8, 13]
    // console.log(cars)

    // Function
    // function addItemToEnd() {
    // }

    //Method
    // cars.push('Рено')                // Добавляет в конец массива
    // cars.unshift('Волга')            // Добавляет в начало массива
    // const firstItem = cars.shift()   // Удаляет и возращает первый элемент из массива
    // const lastCar = cars.pop()       // Удаляет и возращает последний элемент из массива
    // console.log(firstItem)
    // console.log(cars)

    // console.log(cars.reverse())
    // console.log(cars)

    // const index = cars.indexOf('БМВ')    
    // cars[index] = 'Porsche'
    // console.log(cars)

    // let findedPerson
    // for (const person of people) {
    //     if (person.budget === 3500) {
    //         findedPerson = person
    //     }
    // }

    // console.log(findedPerson)

    // const index = people.findIndex(function(person) {
    //     return person.budget === 3500
    // })

    // const person = people.find(function(person) {
    //     return person.budget === 3500
    // })

    // const person = people.find(person => person.budget === 3500)
    // console.log(person)

    // console.log(cars.includes('Мазда'))

    // const upperCaseCars = cars.map(car => {
    //     return car.toUpperCase()
    // })
    // console.log(upperCaseCars)
    // console.log(cars)

    const pow2 = num => num ** 2
    const sqrt = num => Math.sqrt(num)

    const pow2Fib = fib.map(pow2).map(Math.sqrt)

    console.log(fib)
    console.log(pow2Fib)

    // Задача 1
    // const text = 'Привет, мы изучаем JavaScript'
    // const reverseText = text.split('').reverse().join('')
    // console.log(reverseText)

    // 3:34:52

});


