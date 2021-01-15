// CONSTANT'S DECLARATIONS
const resultAnswers = ['B', 'C', 'A', 'B']

const badMessage = 'Que pena, você não está ligado nos rango maneiro!'
const coolMessage = `Aehoo, você acertou {}% do quiz, seu esfomeado/a!`

const classRedColor = 'text-danger'
const classGreenColor = 'text-success'

const form = document.querySelector('.quiz-form')
const divResult = document.querySelector('.quiz-result')

// CREATE ELEMENT
const newParagraph = document.createElement('p')

// FUNCTIONS
const insertResultParagraph = (message) => {
    newParagraph.textContent = message
    divResult.insertAdjacentElement('beforeend', newParagraph)
}

const setClassColor = classColor => {
    newParagraph.setAttribute('class', classColor)
}

const calculateScore = quizResult => {
    let score = 0

    quizResult.forEach((answer, index) => {
        if (answer === resultAnswers[index]) {
            score += 25
        }
    })

    return score
}

const showQuizResult = event => {
    event.preventDefault()

    const quizResult = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    const score = calculateScore(quizResult)

    if (!score) {
        insertResultParagraph(badMessage)
        setClassColor(classRedColor)

        return
    }

    insertResultParagraph(coolMessage.replace(/{}/, score))
    setClassColor(classGreenColor)
}

//EVENT
form.addEventListener('submit', showQuizResult)
