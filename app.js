// global variables
const order = prompt(
  "Please type in what flavor froyo you'd like to order separated by commas:"
);
const orderArr = order.split(",");
let van = 0;
let cof = 0;
let str = 0;

for (let i = 0; i < orderArr.length; i++) {
  if (orderArr[i] === "vanilla") {
    van += 1;
  } else if (orderArr[i] === "strawberry") {
    str += 1;
  } else if (orderArr[i] === "coffee") {
    cof += 1;
  } else {
    console.log("We don't carry that flavor!");
  }
}

const froyo = [
  {
    vanilla: van,
    strawberry: str,
    coffee: cof,
  },
];

console.log(froyo);
