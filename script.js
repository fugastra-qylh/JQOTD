var quotes = [
  " \"Youth\"".","\"@Fugastra would u get pegged\"","\"Ok who the fuck is playing the boccherini Minuet in the toilet\""
]

function showQuotes(){
  var number = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote__display').innerHTML = quotes[number];
}

