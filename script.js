const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("getquote");

function fetchQuote() {
  quote.innerHTML = "";
  author.innerHTML = "";
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((res) => res.json())
    .then((data) => {
      const quoteText = document.createTextNode(`${data.quote}`);
      const authorText = document.createTextNode(`${data.author}`);
      quote.appendChild(quoteText);
      author.appendChild(authorText);
    });
}
