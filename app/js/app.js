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

    const person = people.find(function(person) {
        return person.budget === 3500
    })
    console.log(person)

    // Задача 1
    // const text = 'Привет, мы изучаем JavaScript'
    // const reverseText = text.split('').reverse().join('')
    // console.log(reverseText)

    // 3:27:00

});


