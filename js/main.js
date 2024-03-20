function cancel(event) {
    event.preventDefault();
    window.location.href = 'start.html';
}

const namnBox = document.getElementById('namn')
const validName = /^[a-zåäö]{2,}\s[a-zåäö]{2,}$/i
namnBox.addEventListener('input', function() {
    if (validName.test(namnBox.value)) {
        namnBox.classList.remove('is-invalid')
        namnBox.classList.add('is-valid')
    } else {
        namnBox.classList.remove('is-valid')
        namnBox.classList.add('is-invalid')
    }
})

const telefonBox = document.getElementById('telefon')
const validPhone = /^[\d()-]{10,}$/
telefonBox.addEventListener('input', function() {
    if (validPhone.test(telefonBox.value)) {
        telefonBox.classList.remove('is-invalid')
        telefonBox.classList.add('is-valid')
    } else {
        telefonBox.classList.remove('is-valid')
        telefonBox.classList.add('is-invalid')
    }
})

const emailBox = document.getElementById('email')
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
emailBox.addEventListener('input', function() {
    if (validEmail.test(emailBox.value)) {
        emailBox.classList.remove('is-invalid')
        emailBox.classList.add('is-valid')
    } else {
        emailBox.classList.remove('is-valid')
        emailBox.classList.add('is-invalid')
    }
})

const adressBox = document.getElementById('adress')
const validAddress = /^[\w\s-]{2,50}\s[\d]{5,5}\s[a-zåäö]{2,50}$/i
//const validAddress = /^[\w\s-]{2,50}\s(?:\d\s*){5}\s[a-zåäö]{2,50}$/i
adressBox.addEventListener('input', function(){
    if (validAddress.test(adressBox.value)) {
        adressBox.classList.remove('is-invalid')
        adressBox.classList.add('is-valid')
    } else {
        adressBox.classList.remove('is-valid')
        adressBox.classList.add('is-invalid')
    }
})

