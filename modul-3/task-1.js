function slugify(title) {
  title = title.toLowerCase();
  return title.replace(/\s+/g, "-");
}

console.log(slugify("arrays for beginners"));
