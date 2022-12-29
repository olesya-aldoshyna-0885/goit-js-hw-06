// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать
// его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
//  и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const counterValue = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  decrement(value) {
    this.value -= 1;
  },
};

const valueEl = document.querySelector(`#value`);
const decrBtn = document.querySelector(`[data-action="decrement"]`);
const incrBtn = document.querySelector(`[data-action="increment"]`);

decrBtn.addEventListener(`click`, function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});
incrBtn.addEventListener(`click`, function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});