const input = document.querySelector('input')
const ball = document.querySelector('img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Yes!', 'No.', 'Maybe.', 'Hard to tell...', 'You don`t want to know...']

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Your question must end with "?".'
		answer.textContent = ''
	} else {
		error.textContent = 'You have to ask a question!'
		answer.textContent = ''
	}

	ball.classList.remove('shake-animation')
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall)
