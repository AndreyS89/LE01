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

    
    const delay = (callback, wait = 1000) => {
        setTimeout(callback, wait)
    }
    
    delay(() => {
        console.log('After 2 second')
    }, 2000)

    // 4:26:29

});


