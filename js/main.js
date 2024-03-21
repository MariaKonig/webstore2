
// Form validation. 
function checkInput(userInput, rule) {
    userInput.addEventListener('input', function(){
        if(rule.test(userInput.value)) {
            userInput.classList.remove('is-invalid')
            userInput.classList.add('is-valid')
        } else {
            userInput.classList.remove('is-valid')
            userInput.classList.add('is-invalid')
        }
    })
}

const nameInput = document.getElementById('namn')
const validName = /^[a-zåäö]{2,}\s[a-zåäö]{2,}$/i
checkInput(nameInput, validName)

const phoneInput = document.getElementById('telefon')
const validPhone = /^[\d()-]{10,}$/
checkInput(phoneInput, validPhone)

const emailInput = document.getElementById('email')
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
checkInput(emailInput, validEmail)

const addressInput = document.getElementById('adress')
const validAddress = /^[\w\s-é]{2,50}\s[\d]{5,5}\s[a-zåäö]{2,50}$/i
checkInput(addressInput, validAddress)

// Redirect when closing modal in order.
const modalID = document.getElementById('successModal')
modalID.addEventListener('hidden.bs.modal', function(){
    location.replace("produkter.html")
})

addEventListener('')
