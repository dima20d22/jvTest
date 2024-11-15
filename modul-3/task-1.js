function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("arrays for beginners"));
