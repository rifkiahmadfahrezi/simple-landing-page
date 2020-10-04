const menuToggle = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav-menu')

// Toggle menu
menuToggle.addEventListener('click', () => {
	navMenu.classList.toggle('nav-active')
})

function validate(variable) {
	if(variable.value == ''){
		variable.classList.add('invalid')
		variable.setAttribute('placeholder', 'This field cant be empty!')
	}else{
		variable.classList.remove('invalid')
	}

	if(variable.getAttribute('type') == 'email'){

		const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

		if(!variable.value.match(emailCheck)){
			variable.classList.add('invalid')
			variable.setAttribute('placeholder', 'Input your email correctly!')
		}
		else{
			variable.classList.remove('invalid')
		}

	}
}

function getUserName(target) {
	let arr = target.split(' ')

	return arr[0]

}


const inputs = document.querySelectorAll('section#contact form .required')
const submitButton =  document.querySelector('.send-email')
let nameInModal =  document.querySelector('.modal-box .name')

const modalBox =  document.querySelector('.modal-box')

const name =  document.querySelector('section#contact form input.name')
const email =  document.querySelector('section#contact form input.email')
const subject =  document.querySelector('section#contact form input.subject')
const message =  document.querySelector('section#contact form textarea.message')


window.addEventListener('click', (e)=> {
	if(e.target.className == 'close' ) modalBox.classList.remove('show')
})


submitButton.addEventListener('click', () => {
	for(let i = 0; i < inputs.length; i++){
		if (inputs[i].value == ''){
			inputs[i].classList.add('invalid')
			inputs[i].setAttribute('placeholder', 'This field cant be empty!')

		}else{
			inputs[i].classList.remove('invalid')
		}


		
	}

	if(name.value != '' && email.value != '' && subject.value != '' && message.value != ''){
		nameInModal.innerHTML = getUserName(name.value)
		modalBox.classList.add('show')

		setInterval(() =>{

			modalBox.classList.remove('show')

		}, 2000)

		// set value input menjadi kosong
		name.value = ''
		email.value = ''
		subject.value = ''
		message.value = ''

	}



})

inputs.forEach((el) => {
	el.addEventListener('input', (e) => {
		validate(el)
	})
})
