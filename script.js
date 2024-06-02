var quotes = [
  {
    author: "Frank Zappa",
    quote: "So many books, so little time",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on",
  },
];

var previousIndex;

function generateQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  while (previousIndex == randomIndex) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }
  previousIndex = randomIndex;
  document.getElementById("quote").innerHTML = `
  " ${quotes[randomIndex].quote} "
  <cite>- ${quotes[randomIndex].author}</cite>`;
}

window.addEventListener('resize', function () {
  console.log(`Inner Width: ${window.innerWidth}`);
  console.log(`1 View Width: ${window.innerWidth / 100}`);
  console.log('--------------');
})