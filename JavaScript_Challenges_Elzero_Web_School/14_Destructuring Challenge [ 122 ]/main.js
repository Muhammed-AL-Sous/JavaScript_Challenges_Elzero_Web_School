let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let a;
for (let i = chosen - 1; i < chosen; i++) {
  a = myFriends[i];
  let {
    title,
    age,
    available,
    skills: [, two],
  } = a;
  if (available === true) {
    available = "Available";
  } else {
    available = "Not Available";
  }

  console.log(`Your Name is : ${title}`);
  console.log(`Your Age is : ${age}`);
  console.log(`Your State is : ${available}`);
  console.log(`Your Skill is : ${two}`);
}
