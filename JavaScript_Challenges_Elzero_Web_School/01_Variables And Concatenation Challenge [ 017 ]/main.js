let theTitle = "Elzero",
  description_content = " Elzero Web School",
  Date_Content = "25/10";

let markup = `
<div class="card">
<h3>Hello ${theTitle}</h3>
<p>${description_content}</p>
<span>${Date_Content}</span>
</div>

<div class="card">
<h3>Hello ${theTitle}</h3>
<p>${description_content}</p>
<span>${Date_Content}</span>
</div>

<div class="card">
<h3>Hello ${theTitle}</h3>
<p>${description_content}</p>
<span>${Date_Content}</span>
</div>

<div class="card">
<h3>Hello ${theTitle}</h3>
<p>${description_content}</p>
<span>${Date_Content}</span>
</div>
`;

document.write(markup);

// ============================================== //

// Method Two :

// let theTitle = "Elzero",
//   description_content = " Elzero Web School",
//   Date_Content = "25/10";

// let cardMarkup = `
// <div class="card">
// <h3>Hello ${theTitle}</h3>
// <p>${description_content}</p>
// <span>${Date_Content}</span>
// </div>`;

// let markup = cardMarkup.repeat(4);

// document.write(markup);
