function showDetails(a, b, c) {
  typeof a === "string"
    ? (us = a)
    : typeof b === "string"
    ? (us = b)
    : (us = c);

  typeof a === "number"
    ? (age = a)
    : typeof b === "number"
    ? (age = b)
    : (age = c);

  typeof a === "boolean"
    ? (bool = a)
    : typeof b === "boolean"
    ? (bool = b)
    : (bool = c);
  let message = "";
  bool === true
    ? (message = "You Are Available For Hire")
    : (message = "You Are Not Available For Hire");
  console.log(`Hello ${us} , Your Age Is ${age} , ${message}`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ======================================================================================== //

// Method Two

function showDetails(a, b, c) {
  let nume = [a, b, c];
  for (let i = 0; i < nume.length; i++) {
    if (typeof nume[i] === "string") {
      a = nume[i];
    } else if (typeof nume[i] === "number") {
      b = nume[i];
    } else {
      typeof nume[i] === "boolean";
      c = nume[i];
      if (c === true) {
        c = "You Are Available For Hire ";
      } else {
        c = "You Are Not Available For Hire";
      }
    }
  }
  console.log(`Hello ${a} , Your Age Is : ${b} , ${c}`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ================================================================================ //

// Method Three

function showDetails(a, b, c) {
  let nume = [a, b, c];
  for (let i = 0; i < nume.length; i++) {
    typeof nume[i] === "string"
      ? (a = nume[i])
      : typeof nume[i] === "number"
      ? (b = nume[i])
      : nume[i] === true
      ? (c = "You Are Available For Hire ")
      : (c = "You Are Not Available For Hire");
  }
  console.log(`Hello ${a} , Your Age Is : ${b} , ${c}`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
