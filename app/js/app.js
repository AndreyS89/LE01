document.addEventListener("DOMContentLoaded", function() {

    // window.alert('1')    
    // alert('1')

    const heading = document.getElementById('hello')
    // const heading2 = document.getElementsByTagName('h2')[0]
    // const heading2 = document.getElementsByClassName('h2-class')[0]
    // console.log(heading2)
    
    // console.dir(heading.id)
    // console.dir(heading.textContent)

    setTimeout(() => {
        addStylelesTo(heading)
    }, 1500)

    function addStylelesTo(naode) {
        heading.textContent = 'Changed from JavaScript'
        heading.style.color = 'red'
        heading.style.textAlign = 'center'
        heading.style.backgroundColor = 'black'
        heading.style.padding = '2rem'
    }
    
    // 4:59:19

});


