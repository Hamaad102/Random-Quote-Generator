var theQuote = '';
var theAuthor = '';
var button = document.getElementById('refresh');

function getQuote() {
    
    $.ajax ({
        headers: {
            "X-Mashape-Key": "ciLwbBetaNmshqo7omzYpDlFTemcp1UAERwjsn7Ytd7K6XIjY1",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            
            theQuote = data.quote;
            theAuthor = data.author;
            document.querySelector('h1').innerHTML = theQuote;
            document.querySelector('h3').innerHTML = theAuthor;
        },
    })
}

getQuote();

document.getElementById("button").onclick = function() {
    getQuote();
};

document.getElementById("buttonTwit").onclick = function() {
    window.open("https://twitter.com/intent/tweet?text="+theQuote+' - '+theAuthor);
};