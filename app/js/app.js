document.addEventListener("DOMContentLoaded", function() {

    // Урок 5. JavaScript. Promise. Что это, как работает (+ пример)
    // https://youtu.be/1idOY3C1gYU
    // -------------------------------------- //
    
    // console.log('Request data...')

    // setTimeout(() => {
    //     console.log('Preparing data...')

    //     const backendData = {
    //         server: 'aws',
    //         port: 2000,
    //         status: 'working'
    //     }

    //     setTimeout(() => {
    //         backendData.modified = true
    //         console.log('Data received')
    //     }, 2000)
    // }, 2000)

    const p = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Preparing data...')
            const backendData = {
                server: 'aws',
                port: 2000,
                status: 'working'
            }
        }, 2000)
    })
 
    p.then(() => {
        console.log('Promise resolve')
    })

    // -------------------------------------- //
    // TIME | 08:41
        
});