var quotes = [
  "Youth","@Fugastra would u get pegged","Ok who the fuck is playing the boccherini Minuet in the toilet","Sucking dicks.","legal sex.","But he can make it tighter for me","(Maybe not today I didn’t bring my douche :3)","It’s the first time I actually told someone I masturbated using a dildo 😭😭","No cuz I might fall below KChan","Should I be contained in horny jail(no)"
]

function showQuotes(){
  var number = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote__display').innerHTML = quotes[number];
}

