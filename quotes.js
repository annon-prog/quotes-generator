const quoteButton = document.getElementById("quote-button");
let quoteContainer = document.getElementById("quote-container");
let quoteText = document.getElementById("quote-text");

const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Believe you can, and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The future depends on what you do today. - Mahatma Gandhi",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "The best way to predict the future is to create it. - Peter Drucker",
  "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "It's not about how bad you want it. It's about how hard you're willing to work for it. - Anonymous",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "A year from now, you may wish you had started today. - Karen Lamb",
  "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "The man who moves a mountain begins by carrying away small stones. - Confucius",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The future depends on what you do today. - Mahatma Gandhi",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
];

const getRandomQuotes = () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const displayRandomQuotes = () => {
  let randomQuote = getRandomQuotes();
  quoteText.textContent = randomQuote;
};

document.addEventListener("DOMContentLoaded", displayRandomQuotes);

quoteButton.addEventListener("click", displayRandomQuotes);
