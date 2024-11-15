var quoteText = document.getElementById("Quote-text");
var quoteAuthor = document.getElementById("Quote-author");


var quotes = [
    {
    text:"“Be yourself; everyone else is already taken.”",
    author:"― Oscar Wilde"
},
{
    text:"“So many books, so little time.”",
    author:"― Frank Zappa"
},
{
    text:"“Be the change that you wish to see in the world.”",
    author:"― Mahatma Gandhi"
},
{
    text:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author:"― J.K. Rowling"
},
{
    text:"“If you tell the truth, you don't have to remember anything.”",
    author:"― Mark Twain"
},
{
    text:"“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”",
    author:"― J.K. Rowling,"
},
{
    text:"“I'm not upset that you lied to me, I'm upset that from now on I can't believe you.”",
    author:"― Friedrich Nietzsche"
}
]

var currentQuoteNum = 0;
function changeQuote(){
    var randomNum =0;
    do{
        randomNum = getRandomNumber();
    }while(randomNum === currentQuoteNum);

    currentQuoteNum = randomNum;
    quoteText.innerHTML = quotes[randomNum].text;
    quoteAuthor.innerHTML = quotes[randomNum].author;


}

function getRandomNumber(){
    //Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * (6 - 0 + 1)) + 0;
}