document.addEventListener("DOMContentLoaded", function() {

    // Урок 4. JavaScript. Асинхронность.Что такое Event Loop. JS SetTimeout 0
    // https://youtu.be/vIZs5tH-HGQ
    // -------------------------------------- //
    
    console.log('Start')

    console.log('Start 2')

    function timeout2sec() {
        console.log('timeout2sec')
    }

    window.setTimeout(function() {
        console.log('Inside timeout, after 2 second')
    }, 200)

    setTimeout(timeout2sec, 2000)

    console.log('End')

    // -------------------------------------- //
    // TIME | END
        
});