let randomeQuote = document.querySelector(".generate-quote");
let button = document.querySelector(".btn");

let quotes = [
    "Life is like riding bicycle. tokeep your balance you must keep moving",
    "Life is tough but so you are...",
    "Nature is not a place to visit, it is home...",
    "Nature is the purest portal to inner-peace..",
    "If you truly love nature,you will find beauty everywere..",
    "If i know what love is ,it is because of you..",
    "Be true to love and love will be true to you..",
    "If you have ability to love,love yourself first",
    "A parent love is whole no matter how many times divided..",
    "There is no such thing as being the perfect parent.so just be a real one."
];


function generateRandomequote(){
     let randome = quotes[Math.floor(Math.random()*quotes.length)];
       randomeQuote.innerHTML = randome;
}

button.addEventListener("click",generateRandomequote);
