console.log('asd');
const quoteBox = document.getElementById('quote-box');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('tweet-quote');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    try {
        const res = await fetch(proxyUrl + apiUrl);
        const data = await res.json();
        quoteAuthor.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
    } catch(e) {
        setTimeout(() => {
            // getQuote();
        }, 2500); 
        console.error('No quote', e);
    } finally {

    }

}

getQuote();