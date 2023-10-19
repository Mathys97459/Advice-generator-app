const number = document.getElementById('number-advice');
const advice = document.getElementById('advice');
const button = document.querySelector('button');

window.onload = () => {
    showAdvice()
};

button.addEventListener('click', showAdvice)

function showAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        number.textContent = data.id;
        advice.textContent = '"' + data.advice +'"';
    })
}