const MyForm = document.querySelector('#my-form')
const fnameInput = document.querySelector('#first-name') // first name
const lnameInput = document.querySelector('#last-name') // last name

const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

MyForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()


    if(fnameInput.value === '' || lnameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = "Please enter all fields"

        setTimeout(() => msg.remove(), 3000)
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${fnameInput.value} ${lnameInput.value} : ${emailInput.value}`))
        
        userList.appendChild(li)


        // Clear fields
        fnameInput.value = ''
        lnameInput.value = ''
        emailInput.value = ''

        }
    }