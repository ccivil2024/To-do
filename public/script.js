const quotes = [
  "Never outshine the master. – Robert Greene",
  "Say less than necessary. – The 48 Laws of Power",
  "Plan all the way to the end. – Law 29",
  "Strike the shepherd and the sheep will scatter. – Law 42",
  "Assume formlessness. – Law 48"
];

let currentQuoteIndex = 0;
const quoteBox = document.getElementById('quote-box');

function cycleQuotes() {
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    quoteBox.textContent = quotes[currentQuoteIndex];
    quoteBox.style.opacity = 1;
  }, 500);
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}
cycleQuotes();
setInterval(cycleQuotes, 5000);

function addTodo() {
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const text = input.value.trim();

  if (text !== '') {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  }
}
