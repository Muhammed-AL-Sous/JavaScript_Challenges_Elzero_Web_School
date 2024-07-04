let names = function (...Names) {
  return `String [${Names.join("] , [")}] => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// let names = (...Names) => `String [${Names.join("] , [")}] => Done !`;
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// ================================================================ //

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[+false];

// console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80

// nums[+false] = index = 0
//  inside  => console.log(calc(10 = one , myNumbers[0] = two
//  , myNumbers[1] = nums[0] , myNumbers[2] = nums[1] ))

let myNumbers = [20, 50, 10, 60];

let calc = function (one, two, ...nums) {
  return one + two + nums[+false];
};

console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80
