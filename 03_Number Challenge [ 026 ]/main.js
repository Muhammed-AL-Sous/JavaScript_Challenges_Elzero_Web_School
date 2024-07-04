let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(Math.min(a, b, c, d)));
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.floor(d)); // 10000
console.log(Math.pow(a, Math.floor(d)));

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d)); // Number
console.log(Math.round(d)); // Number
console.log(Math.floor(d)); // Number
console.log(parseInt(d)); // Number
console.log(d.toFixed(0)); //String

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(b) / Math.ceil(d)); // 67 => Number
