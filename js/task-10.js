// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const input = document.querySelector(`input`);
// const createBtn = document.querySelector(`[data-create]`);
// const destroyBtn = document.querySelector(`[data-destroy]`);
// const boxes = document.querySelector(`#boxes`);

// createBtn.addEventListener(`click`, function createBoxes(amount) {
//   boxes.style.width = 30;

//   for (let i = 0; i < Number(input.value); i+1) {
//     boxes.insertAdjacentHTML(
//       "beforeend",
//       `<div style="
//     background-color = ${getRandomHexColor()};
//     width[i] += 10 px;
//     "></div>`);
//   }
// })

// destroyBtn.addEventListener(`click`, function destroyBoxes() {
//   boxes.innerHTML = "";
// })


const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const div = document.querySelector("#boxes");

btnCreate.addEventListener("click", function createBoxes(amount) {
  amount = Number(input.value);
  let boxes = ``;
  for (let i = 1; i <= amount; i += 1) {
    boxes += `<div style="
    width: ${20 + i * 10}px;
    height: ${20 + i * 10}px;
    background-color: ${getRandomHexColor()};
">${i}</div>`;
  }
  return div.insertAdjacentHTML("beforeend", boxes);
}
);
btnDestroy.addEventListener("click", onBtnDestroyClick => {
  div.innerHTML = "";
});