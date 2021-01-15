document.addEventListener("DOMContentLoaded", function() {

    // Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply
    // -------------------------------------- //

    function hello() {
        console.log('Hello', this)
    }
    
    const person = {
        name: 'Andrey',
        age: 31,
        sayHello: hello,
        sayHelloWindow: hello.bind(window),
        logInfo: function() {
            console.log(`Name is ${this.name}`)
            console.log(`Age is ${this.age}`)
        }
    }

    const lena = {
        name: 'Elena',
        age: 23
    }

    person.logInfo.bind(lena)()

    // -------------------------------------- //
    // TIME | 9:33
        
});