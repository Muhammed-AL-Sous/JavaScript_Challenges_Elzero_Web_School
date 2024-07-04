let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// First Solution
console.log(Math.max(...n1, ...n2) * [...n1, ...n2].length); // 210

// Second Solution
console.log([...n1, ...n2].sort().length * new Set(n2).keys().next().value);

// Third Solution
console.log([...n1, ...n2].sort().length * n1[+isNaN(n1)]);
