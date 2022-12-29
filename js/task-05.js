// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.querySelector(`#name-input`);
const outputName = document.querySelector(`#name-output`);

const inputValue = inputName.addEventListener(`input`, function (evt) {
    outputName.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value === "") {
        outputName.textContent = `Anonymous`;
    };
});