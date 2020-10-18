document.addEventListener("DOMContentLoaded", function() {

    const person = {
        name: 'Andrey', 
        age: undefined,
        isProgrammer: true,
        languages: ['ru', 'en'],
        'complex key': 'Complex Value',
        ['key_' + (1 + 3)]: 'Computed Key', // key_4
        greet() {
            console.log('greet from person')
        }
    }

    // console.log(person.name)
    // const ageKey = 'age'
    // console.log(person[ageKey])
    // console.log(person['complex key'])
    // person.greet()

    // person.age++
    // person.languages.push('by')
    // person['key_4'] = undefined
    // delete person['key_4']

    // console.log(person)
    // console.log(person['key_4'])

    // const name = person.name

    const {name, age: personAge = 10, languages} = person

    console.log(name, personAge, languages)


    // 3:56:35

});


