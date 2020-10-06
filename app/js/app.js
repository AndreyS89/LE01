document.addEventListener("DOMContentLoaded", function() {

    // 1. Массивы
    const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес',]	
    const fib = [1, 1, 2, 3, 5, 8, 13]
    // console.log(cars)

    // Function
    function addItemToEnd() {

    }

    //Method
    cars.push('Рено')                // Добавляет в конец массива
    cars.unshift('Волга')            // Добавляет в начало массива
    const firstItem = cars.shift()   // Удаляет и возращает первый элемент из массива
    const lastCar = cars.pop()       // Удаляет и возращает последний элемент из массива
    console.log(firstItem)
    console.log(cars)

    // 3:14:15

});


