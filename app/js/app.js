document.addEventListener("DOMContentLoaded", function() {

    const person = {
        name: 'Andrey', 
        age: undefined,
        isProgrammer: true,
        languages: ['ru', 'en'],
        // 'complex key': 'Complex Value',
        // ['key_' + (1 + 3)]: 'Computed Key', // key_4
        greet() {
            console.log('greet from person')
        },
        info() {
            console.log('this:', this)
            console.info('Информация про человека поимени:', this.name)
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

    // const {name, age: personAge = 10, languages} = person

    // console.log(name, personAge, languages)

    // console.log(person)

    // for (let key in person) {
    //     if (person.hasOwnProperty(key)){
            // console.log('key: ', key)
            // console.log('value: ', person[key])
    //     }        
    // }

    // const keys = Object.keys(person)
    // console.log(keys)

    // const values = Object.values(person)
    // console.log(values)

    // keys.forEach((key) => {
    //     console.log('key: ', key)
    //     console.log('value: ', person[key])
    // })


    // Context
    // person.info()

    const logger = {
        keys() {
            console.log('Objet Keys:', Object.keys(this))
        },

        keysAndValues() {
            // Object.keys(this).forEach(key => {
            //     console.log(`"${key}": ${this[key]}`)
            // })        
            Object.keys(this).forEach(function(key) {
                console.log(`"${key}": ${this[key]}`)
            }.bind(this))
        },

        withParams(top = false, between = false, bottom = false) {
            if (top) {
                console.log('------------ START ------------')
            }
            
            Object.keys(this).forEach((key, index, array) => {
                console.log(`"${key}": ${this[key]}`)
                if (between && index !== array.length - 1) {
                    console.log('------------------------')
                }
            })

            if (top) {
                console.log('------------ END ------------')
            }
        }
    }

    // const bound = logger.keys.bind(person)
    // bound()
    // logger.keysAndValues.call(logger)
    logger.withParams.call(person, true, true, true)
    logger.withParams.apply(person, [true, true, true])
    

    // 4:20:00

});


