// task 1

function makeTransaction(quantity, pricePerdroid) {
  let calc = quantity * pricePerdroid;
  console.log(
    "You ordered " + quantity + " droids worth " + calc + " credits!"
  );
}

makeTransaction(5, 1000);

// task 2

function slugify(title) {
  title = title.toLowerCase();
  return title.replace(/\s+/g, "-");
}

console.log(slugify("arrays for beginners"));
