var quotes = [
  "Youth","@Fugastra would u get pegged","Ok who the fuck is playing the boccherini Minuet in the toilet","Sucking dicks.","legal sex.","But he can make it tighter for me","(Maybe not today I didn’t bring my douche :3)","It’s the first time I actually told someone I masturbated using a dildo 😭😭","No cuz I might fall below KChan","Should I be contained in horny jail(no)","(For some reason I have a feeling that Ange is avoiding this by sleeping but I hope it’s just my overthinking and the bday pleasure incident actually being that weird)","I mean I did ask Felix whether I could bring a dildo to school via school bag","I have a brother💀","I read it as furry vored💀"
]

function showQuotes(){
  var number = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote__display').innerHTML = quotes[number];
}

