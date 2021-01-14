document.addEventListener("DOMContentLoaded", function() {

    // Урок 1. JavaScript. Что такое prototype. JavaScript Prototype (English Subs)
    // -------------------------------------- //

    // const person = {
        // name: 'Andrey',
        // age: 31,
        // greet: function() {
        //     console.log('Greet!')
        // }
        // }
        
    const person = new Object({
        name: 'Andrey',
        age: 31,
        greet: function() {
            console.log('Greet!')
        }        
    })

    Object.prototype.sayHello = function() {
        console.log('Hello!')
    }

    const lena = Object.create(person)
    lena.name = 'Elena'
        
});