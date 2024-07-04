let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let countParent = 0;

let countChild = 0;

let showCount = myAdmins.slice(0, myAdmins.indexOf("Stop"));

document.write(`<div> We Have ${showCount.length} Admins </div>`);

document.write(`<hr>`);

document.write(`<div>`);

for (let i = 0; i < showCount.length; i++) {
  document.write(` " The Admin For Team ${++countParent} Is ${showCount[i]} "`);
  document.write(`<h3> Team Members : </h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p> - ${++countChild} ${myEmployees[j]} </p>`);
    }
  }
  countChild = 0; // ليبدا من الواحد بالحلقة التي تليها
  document.write(`<hr>`);
}

document.write(`</div>`);
