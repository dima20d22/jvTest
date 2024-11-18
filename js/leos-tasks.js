function objectCount(type, shape, dimensions) {
  const pi = 3.14;
  switch (type) {
    case "P":
      switch (shape) {
        case "cube":
          return dimensions[0] * 12;
        case "sphere":
          return 2 * pi * dimensions[0];
        default:
          return "Enter valid shape!";
      }
    case "S":
      switch (shape) {
        case "cube":
          return dimensions[0] * dimensions[0] * 6;
        case "sphere":
          return pi * dimensions[0] * dimensions[0];
        default:
          return "Enter valid shape!";
      }
    case "V":
      switch (shape) {
        case "cube":
          return dimensions[0] * dimensions[0] * dimensions[0];
        case "sphere":
          return (4 / 3) * pi * dimensions[0] * dimensions[0] * dimensions[0];
        default:
          return "Enter valid shape!";
      }
    default:
      return "Enter valid type!";
  }
}
// type : "P", "S", "V" ;
// shape : "cube", "cylinder", "pyramid", ... ;
// dimensions : [ ... ] ;
// price : price per 100x100x1

console.log(objectCount("V", "sphere", [400]));
