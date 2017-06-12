console.log("Start JS");


var personsArray = [];

this.personsArray = [
  {
    name: "Simon",
    age: 19,
    loc: "Denmark"
  },
  {
    name: "Peter",
    age: 20,
    loc: "Island"
  }];

for (var i = 0; i < this.personsArray.length; i++) {
  console.log(this.personsArray[i]);
}

console.log("Slut JS");
