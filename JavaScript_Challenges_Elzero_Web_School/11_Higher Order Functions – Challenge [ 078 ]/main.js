let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .map(function (ele) {
    if (ele === "," || ele === myString.slice(-true)) {
      ele = "";
    }
    if (ele === "_") {
      ele = " ";
    }
    return ele;
  })
  .reduce(function (acc, current) {
    console.log(`acc => ${acc}`);
    console.log(`current => ${current}`);
    console.log(`result => ${acc === current ? current : acc + current}`);
    console.log(`#############################`);
    return acc === current ? current : acc + current;
  });

console.log(solution); // Elzero Web School
