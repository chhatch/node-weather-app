console.log('YEEAAHH! We got JAVASCRIPT, baaaabbyy!!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#message1')
const m2 = document.querySelector('#message2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    m1.textContent = 'Loading..'
    m2.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                m1.textContent = 'Error'
                m2.textContent = data.error
            } else {
                console.log('test')
                m1.textContent = data.location
                m2.textContent = data.forecast
            }
        })
    })
})
