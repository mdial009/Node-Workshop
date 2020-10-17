//Console Log a few things
let a = "this is awesome";
console.log(1);
console.log("strings");
console.log(a);

// print out multiple things from one function

console.log("this was our", 1, "st tutorial ");

let fname1 = "Madany";
const fname2 = "Madany";

const lname = "Diallo";

fname1 = fname1 + lname;
console.log(fname1);

// fname2 = fname2 +lname;
//console.log(fname2);
//Does not run because, const variable cannot be reassigned

// for loop
for (let i = 0; i < 7; i++) {
  console.log(i);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + i + " ";
  }
  console.log(str);
}

// while loops
// while (condition){
//  loop code Here;
// }

let n = 0;
while (n < 10) {
  console.log(n * n);
  n = n + 1; // or n+=1;
}
