console.log('asd');

async function getQuote() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    try {
        const res = await fetch(proxyUrl + apiUrl);
        const data = await res.json();
        console.log(data);
    } catch(e) {
        getQuote();
        console.error('No quote', e);
    } finally {

    }

}

getQuote();