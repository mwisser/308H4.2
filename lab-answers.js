//////////////////////////
// Easy Going
/////////////////////////

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//////////////////////////
// Get Even
//////////////////////////

for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

/////////////////////////
// Fizz Buzz
/////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

///////////////////////
// Wild Wild Life
//////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2]++;

wolfy[3] = "Gotham City"

dart.push("Hawkins");

wolfy.splice(0, 1, "Gameboy");

console.log(wolfy);
console.log(plantee);
console.log(dart);


/////////////////////
// Yell at the Ninja Turtles
/////////////////////

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (const turtle of ninjaTurtles) {
  const uppercaseName = turtle.toUpperCase();
  console.log(uppercaseName);
}

////////////////////
// Where is Waldo
////////////////////

//const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", 
//["Lucinda", "Jacc", "Neff", "Snoop"], 
//["Petunia", ["Baked Goods", "Waldo"]]];

//whereIsWaldo.splice(1, 1);

//whereIsWaldo[2][2] = "No One";

//console.log(whereIsWaldo[3][1][1]);

///////////////////
// Excited Kitten
///////////////////

const kittyTalk = [
    "...human... why you taking pictures of me...",
    "...the catnip made me do it...",
    "...why does the red dot always get away...?"
  ];
  
  for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
  
    if (i % 2 === 0) {
      let meow = Math.floor(Math.random() * kittyTalk.length);
      console.log(kittyTalk[meow]);
    }
  }

////////////////////
// Find the Median
///////////////////

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

nums.sort((a, b) => a - b);

const middleIndex = Math.floor(nums.length / 2);

if (nums.length % 2 === 1) {
    const median = nums[middleIndex];
    console.log(median);
  } else {
    const median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
    console.log(median);
  }
  