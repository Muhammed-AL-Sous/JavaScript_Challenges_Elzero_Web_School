// Start Header

let header = document.createElement("header");
header.className = "website-head";
header.style.cssText =
  "display : flex ; justify-content : space-between; align-items : center; padding : 20px";
// Start Logo

let logo = document.createElement("div");
logo.className = "logo";
header.appendChild(logo);
logo.textContent = "Elzero";
logo.style.cssText = "font-size : 26px ; color : #23a96e ; font-weight : bold ";

// End Logo

// Start Menu
let menu = document.createElement("div");
menu.className = "menu";
header.appendChild(menu);

let ul = document.createElement("ul");
menu.appendChild(ul);
ul.style.cssText =
  "display: flex; list-style: none ; gap: 20px ; padding: 0 ; margin: 0 ; font-size : 20px";

let liHome = document.createElement("li");
let liAbout = document.createElement("li");
let liService = document.createElement("li");
let liContact = document.createElement("li");

let liHomeText = document.createTextNode("Home");
let liAboutText = document.createTextNode("About");
let liServiceText = document.createTextNode("Service");
let liContactText = document.createTextNode("Contact");

liHome.appendChild(liHomeText);
liAbout.appendChild(liAboutText);
liService.appendChild(liServiceText);
liContact.appendChild(liContactText);

ul.appendChild(liHome);
ul.appendChild(liAbout);
ul.appendChild(liService);
ul.appendChild(liContact);

console.log(header);
document.body.appendChild(header);
// End Menu

// End Header

// Start Content

let content = document.createElement("section");
content.className = "content";
content.style.cssText =
  "display: grid; grid-template-columns: repeat(3 , 1fr); grid-template-rows: repeat(5 , 1fr); gap: 10px; padding: 10px; box-sizing: border-box; background-color : #ececec ; ";
document.body.appendChild(content);

for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  content.appendChild(product);
  product.style.cssText =
    "padding : 15px ; border : 1px solid #ffffff; text-align : center ; border-radius : 6px ; box-sizing: border-box; background-color : #ffffff";

  let span = document.createElement("span");
  product.appendChild(span);
  span.style.cssText =
    "display : block ; text-align : center ; color : black ; margin : 0; font-size : 30px ; font-weight:bold; padding : 0 ";
  span.appendChild(document.createTextNode(`${i + 1}`));

  let productText = document.createTextNode("Product");
  product.appendChild(productText);
}
// End Content

// Start Footer
let footer = document.createElement("footer");
footer.className = "footer";
document.body.appendChild(footer);

let footerText = document.createTextNode("Copyright 2024");
footer.appendChild(footerText);
footer.style.cssText =
  "text-align : center ; background-color : #23a96e ; padding : 20px ; font-size : 23px ; color : white";
// End Footer
