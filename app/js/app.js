document.addEventListener("DOMContentLoaded", function() {

    const person = {
        name: 'Andrey', 
        age: 31,
        isProgrammer: true,
        languages: ['ru', 'en'],
        '': '',
        greet() {
            console.log('greet from person')
        }
    }

    console.log(person.name)
    console.log(person['age'])

    // 3:48:23

});


