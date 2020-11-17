document.addEventListener("DOMContentLoaded", function() {

    // Event loop

    // const timeout = setTimeout(() => {
    //     console.log('After timeout')
    // }, 2500)

    // clearTimeout(timeout)
    
    // const interval = setInterval(() => {
    //     console.log('After timeout')
    // }, 1000)

    // clearTimeout(timeout)

    
    // const delay = (callback, wait = 1000) => {
    //     setTimeout(callback, wait)
    // }
    
    // delay(() => {
    //     console.log('After 2 second')
    // }, 2000)

    const delay = (wait = 1000) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, wait)
        })
        return promise
    }

    delay(2500)
        .then(() => {
            console.log('After 2 second')
        })
        .catch(err => console.error(err))
        .finally(() => console.log('Finally'))

    // 4:31:14

});


