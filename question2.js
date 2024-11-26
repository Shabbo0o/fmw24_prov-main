// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
  string1 = str1.toLowerCase();
  string2 = str2.toLowerCase();
  let number = 0;
  // Din kod här
  for (let i=0; i < string1.length; i++){
    if (string1[i] === string2[i]){
      number++;
    }
  }
  return number;
}


module.exports = equalLetterPositions;
