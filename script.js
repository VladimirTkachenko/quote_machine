console.log('asd');
const quoteBox = document.getElementById('quote-box');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

async function getQuote() {
    showLoadingSpinner();
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    try {
        const res = await fetch(proxyUrl + apiUrl);
        const data = await res.json();
        if (data.quoteAuthor === '') {
            quoteAuthor.innerText = 'Unknown';    
        } else {
            quoteAuthor.innerText = data.quoteAuthor;
        }
        if (data.quoteText.length > 150) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        reoveLoadingSpinner();
    } catch(e) {
        setTimeout(() => {
            getQuote();
        }, 1500); 
    } finally {

    }

}

function tweetQuote() {
    console.log("tweetQuote")
    const text = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(twitterUrl, '_blank');
}

function showLoadingSpinner() {
    loader.hidden = false;
    quoteBox.hidden = true;
}

function reoveLoadingSpinner() {
    if (!loader.hidden) {
        loader.hidden = true;
        quoteBox.hidden = false;
    }
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();