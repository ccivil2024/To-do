const quotes = [
  "Never outshine the master. – Robert Greene",
  "Say less than necessary. – The 48 Laws of Power",
  "Plan all the way to the end. – Law 29",
  "Strike the shepherd and the sheep will scatter. – Law 42",
  "Assume formlessness. – Law 48", "Small steps every day lead to big results.",
  "Your future is created by what you do today, not tomorrow. — Robert Kiyosaki",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
  "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
  "Push yourself, because no one else is going to do it for you.",
  "Done is better than perfect. — Sheryl Sandberg",
  "Your only limit is you."
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
