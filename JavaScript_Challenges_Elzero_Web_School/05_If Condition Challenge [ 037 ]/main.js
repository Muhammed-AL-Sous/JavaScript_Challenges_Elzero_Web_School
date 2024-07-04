let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if (String(st.length * 2) === "34") {
  console.log("Good");
}

if (`${st.length * 2}` === "34") {
  console.log("Good");
}

// W Position May Change
if (st.slice(st.indexOf("W"), st.indexOf("W") + 1).toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof Number(st) !== "string") {
  console.log("Good");
}

if (typeof Number(st) === "number") {
  console.log("Good");
}

if (st.substring(0, 6) + st.substr(0, 6) === "ElzeroElzero") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
