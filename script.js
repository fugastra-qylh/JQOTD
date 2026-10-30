var quotes = [
  "Every day is a new day \n by \"Carrie Underwood\".","The most important thing is to enjoy your life — to be happy. It's all that matters.  \n by \"Audrey Hepburn\".","The purpose of our lives is to be happy. \n  by \"Dalai Lama\".","Embrace the glorious mess that you are. \n by \"Elizabeth Gilbert\"." ,"Wine is constant proof that God loves us and loves to see us happy.\n by \" Benjamin Franklin\".","Being happy never goes out of style. \n by \"Lilly Pulitzer\".","Happiness is the best makeup. \n by \"Drew Barrymore\".", "Roll with the punches and enjoy every minute of it. \n by \"Meghan Markle\".","The mere sense of living is joy enough. \n by \"Emily Dickinson\".","The only thing that will make you happy is being happy with who you are. \n by \"Goldie Hawn\".", "Happiness comes in waves. It’ll find you again. \n by \"Unknown\".","When you love what you have, you have everything you need. \n by \"Unknown\"."
]

function showQuotes(){
  var number = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote__display').innerHTML = quotes[number];
}

