function getShippingCost(country) {
  let price;
  let result;

  let normalizedCountry =
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

  switch (normalizedCountry) {
    case "China":
      price = 100;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    case "Chile":
      price = 250;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    case "Australia":
      price = 170;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    case "Jamaica":
      price = 120;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    default:
      result = "Sorry, there is no delivery to your country";
  }

  return result;
}

console.log(getShippingCost("ChIna"));
