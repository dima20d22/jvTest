function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let sum = pricePerDroid * quantity;
  if (customerCredits >= sum) {
    console.log(`You ordered ${quantity} droids worth ${sum} credits!`);
  } else {
    console.log("Insufficient funds!");
  }
}
makeTransaction(3, 1000, 3000);
