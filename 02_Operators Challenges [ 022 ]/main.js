let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 11 + 20  + 80 - 11 = 100
console.log(++a + -b + +c++ - -a++ + +a); // 13 - 21 + 81 + 13 + 14 = 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100

/* First Code
  [++a] [+] [+b++] [+] [+c++] [-] [+a++]

  [++a]
  - Value: 11
  - Explain: pre increment

  [+]
  - Explain:Addition Sign

  [+b++]
  - Value: 20
  - Explain: post increment & change string to number

  [+]
  - Explain:Addition Sign

  [+c++]
  - Value: 80
  - Explain: post increment 

  [-]
  - Subtraction Sign

  [+a++]
  - Value: 11 // last value for a is 11 
  - Explain: post increment 
*/

/* Second Code
[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

[++a] 
  - Value: 13
  - Explain: pre increment 

  [+]
  - Explain:Addition Sign

  [-b] 
  - Value: -21
  - Explain: Unary Negation 

  [+]
  - Explain:Addition Sign

  [+c++]
  - Value: 81
  - Explain: post increment

  [-]
  - Subtraction Sign

  [-a++]
  - Value: 13
  - Explain: post increment & Unary Negation

  [+]
  - Explain:Addition Sign

  [+a]
  - Value: 14
  - Explain: Unary Plus
*/

/* Third Code
[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]

  [--c]
  - Value: 81
  - Explain: pre decrement

  [+]
  - Explain: Addition Sign

  [+b]
  - Value: 21
  - Explain: Unary Plus

  [+]
  - Explain: Addition Sign

  [--a]
  - Value: 13
  - Explain: Pre Decrement 

  [*]
  - Explain: Multiplication Sign

  [+b++]
  - Value: 21
  - Explain: post increment &  Unary plus

  [-]
  - Subtraction Sign

  [+b]
  - Value: 22
  - Explain: Unary Plus

  [*]
  - Explain: Multiplication Sign

  [a]
  - Value: 13
  - Explain: Variables

  [+]
  - Explain: Addition Sign

  [--a]
  - Value: 12
  - Explain: pre Decrement

  [-]
  - Subtraction Sign

  [+true]
  - Value: 1
  - Explain: Boolean 
*/

// ==================================================== //

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(-d + ++f + ++e * ++g); // 173  = 100 + 31 + 21 * 2
