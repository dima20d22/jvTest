// task 1

function getShippingMessage(country, price, deliveryFee) {
  console.log(
    `Shipping to ${country} will cost ${price + deliveryFee} credits`
  );
}

getShippingMessage("Germany", 120, 50);
