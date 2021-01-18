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
        logInfo: function(job, phone) {
            console.log(`${this.name} info:`)
            console.log(`Name is ${this.name}`)
            console.log(`Age is ${this.age}`)
            console.log(`Job is ${job}`)
            console.log(`Phone is ${phone}`)
            console.groupEnd()
        }
    }

    const lena = {
        name: 'Elena',
        age: 23
    }

    // const fnLenaInfoLof = person.logInfo.bind(lena)()
    // fnLenaInfoLof('Frontend', '8-999-123-12-23')

    // person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')
    // person.logInfo.call(lena, 'Frontend', '8-999-123-12-23')
    // person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])

    const array = [1, 2, 3, 4, 5]

    // function multBy(arr, n) {
    //     return arr.map(function(i) {
    //         return i * n
    //     })
    // }

    Array

    console.log(multBy(array, 15))

    // -------------------------------------- //
    // TIME | 9:33
        
});