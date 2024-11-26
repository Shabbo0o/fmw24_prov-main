// 4b: Uppdatera egenskaper med Spread Operator (2p)
// Skriv en funktion updatePriceWithDiscount som tar emot två parametrar:
// ett produktobjekt och en rabattprocent. Funktionen ska returnera ett nytt objekt
// där priset är uppdaterat med den givna rabattprocenten

const product2 = {
  name: "Laptop",
  price: 15000,
  brand: "TechBrand",
};

function updatePriceWithDiscount(product2, discount) {
  // Din kod här
  //let newPrice = product2.price - product2.price*discount/100;
  let newPrice = ((100 - discount)/100) * product2.price;
  
  let newProduct2 = {...product2, price: newPrice};
  return newProduct2;
}

// console.log(updatePriceWithDiscount(product2, 10));
// Output: { name: "Laptop", price: 13500, brand: "TechBrand" }
// Uträkning: ((100 - discount)/100) * price = rabbaterat pris

module.exports = updatePriceWithDiscount;
