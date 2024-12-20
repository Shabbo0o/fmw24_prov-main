// 3. Filtrera namn (2p)
// Skriv en funktion, filter names, som tar en array med namn och en bokstav
// som input och returnerar en ny array med de namn som börjar med bokstaven.
// funktionen behöver bara hantera en stor bokstav som input

// Exempel:
// filterNames(["John", "Mary", "Peter", "Jane"], "J") // Returnerar ["John", "Jane"]
// filterNames(["John", "Mary", "Peter", "Jane"], "P") // Returnerar ["Peter"]
// filterNames(["John", "Mary", "Peter", "Jane"], "X") // Returnerar []

function filterNames(names, letter) {
  // Din kod här
  let resultNames = [];
  for (let i = 0; i<names.length; i++){
    if (letter === names[i][0]){
      resultNames.push(names[i]);
    }
  }
  return resultNames;
}


console.log(filterNames(["John", "Mary", "Peter", "Jane"], "J")); // Returnerar ["John", "Jane"]
console.log(filterNames(["John", "Mary", "Peter", "Jane"], "P")); // Returnerar ["Peter"]
console.log(filterNames(["John", "Mary", "Peter", "Jane"], "X") );// Returnerar []

module.exports = filterNames;
