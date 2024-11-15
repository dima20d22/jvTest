function getShippingCost(country) {
  let price;
  let result;

  // let normalizedCountry =
  //   country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

  const normalizedCountry = country.toLowerCase().trim();

  switch (normalizedCountry) {
    case "china":
      price = 100;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    case "chile":
      price = 250;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    case "australia":
      price = 170;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    case "jamaica":
      price = 120;
      result = `Shipping to ${normalizedCountry} will cost ${price} credits`;
      break;
    default:
      result = "Sorry, there is no delivery to your country";
  }

  return result;
}

console.log(getShippingCost("chIna "));
