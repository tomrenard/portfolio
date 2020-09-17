function myGradientFunction() {
  var element = document.body;
  var item = document.getElementById("gradient");
  if (item.textContent == "GRADIENT MODE") {
    item.textContent = "LIGHT MODE";}
  else {
    item.textContent = "GRADIENT MODE";}
  element.classList.toggle("gradient-mode");
   }

function myWeirdFunction() {
   var element = document.body;
   var year = document.getElementById("year");
   var tom = document.getElementById("tom");
   element.classList.toggle("weird-mode");
   element.classList.toggle("glitches");
    if (tom.textContent == "©TOM RENARD/2020 ALL RIGHTS RESERVED") {
    tom.textContent = "CLICK HERE TO STOP THIS";}
  else {
    tom.textContent = "©TOM RENARD/2020 ALL RIGHTS RESERVED";}
   }

var q_less = document.getElementById("q-less");
var desc1 = document.getElementById("desc1");
var desc2 = document.getElementById("desc2");
var desc3 = document.getElementById("desc3");
var desc4 = document.getElementById("desc4");
q_less.addEventListener("mouseover", (event) => {
  desc1.classList.toggle("ghost");
  desc2.classList.toggle("ghost");
  desc3.classList.toggle("ghost");
  desc4.classList.toggle("ghost");
});
q_less.addEventListener("mouseout", (event) => {
  desc1.classList.remove("ghost");
  desc2.classList.remove("ghost");
  desc3.classList.remove("ghost");
  desc4.classList.toggle("ghost");
});

var studio = document.getElementById("studio");
var desc1 = document.getElementById("desc1");
var desc2 = document.getElementById("desc2");
var desc3 = document.getElementById("desc3");
var desc4 = document.getElementById("desc4");
var project_img = document.getElementById("studio-img");
studio.addEventListener("mouseover", (event) => {
  desc1.classList.toggle("ghost");
  desc2.classList.toggle("ghost");
  desc3.classList.toggle("ghost");
  desc4.classList.toggle("ghost");
});
studio.addEventListener("mouseout", (event) => {
  desc1.classList.remove("ghost");
  desc2.classList.remove("ghost");
  desc3.classList.remove("ghost");
  desc4.classList.toggle("ghost");
});

// var cocktail = document.getElementById("cocktail");
// var desc1 = document.getElementById("desc1");
// var desc2 = document.getElementById("desc2");
// var desc3 = document.getElementById("desc3");
// cocktail.addEventListener("mouseover", (event) => {
//   desc1.classList.toggle("ghost");
//   desc2.classList.toggle("ghost");
//   desc3.classList.toggle("ghost");
// });
// cocktail.addEventListener("mouseout", (event) => {
//   desc1.classList.remove("ghost");
//   desc2.classList.remove("ghost");
//   desc3.classList.remove("ghost");
// });


var item_ruby = document.getElementById("ruby");
var logo_ruby = document.getElementById("ruby-l");
item_ruby.addEventListener("mouseover", (event) => {
  logo_ruby.classList.toggle("skill-mode");
});
item_ruby.addEventListener("mouseout", (event) => {
  logo_ruby.classList.remove("skill-mode");
});

var item_js = document.getElementById("js");
var logo_js = document.getElementById("js-l");
item_js.addEventListener("mouseover", (event) => {
  logo_js.classList.toggle("skill-mode");
});
item_js.addEventListener("mouseout", (event) => {
  logo_js.classList.remove("skill-mode");
});

var item_html = document.getElementById("html");
var logo_html = document.getElementById("html-l");
item_html.addEventListener("mouseover", (event) => {
  logo_html.classList.toggle("skill-mode");
});
item_html.addEventListener("mouseout", (event) => {
  logo_html.classList.remove("skill-mode");
});

var item_css = document.getElementById("css");
var logo_css = document.getElementById("css-l");
item_css.addEventListener("mouseover", (event) => {
  logo_css.classList.toggle("skill-mode");
});
item_css.addEventListener("mouseout", (event) => {
  logo_css.classList.remove("skill-mode");
});

var item_boot = document.getElementById("boot");
var logo_boot = document.getElementById("boot-l");
item_boot.addEventListener("mouseover", (event) => {
  logo_boot.classList.toggle("skill-mode");
});
item_boot.addEventListener("mouseout", (event) => {
  logo_boot.classList.remove("skill-mode");
});

var item_sql = document.getElementById("sql");
var logo_sql = document.getElementById("sql-l");
item_sql.addEventListener("mouseover", (event) => {
  logo_sql.classList.toggle("skill-mode");
});
item_sql.addEventListener("mouseout", (event) => {
  logo_sql.classList.remove("skill-mode");
});

var item_git = document.getElementById("github");
var logo_git = document.getElementById("github-l");
item_git.addEventListener("mouseover", (event) => {
  logo_git.classList.toggle("skill-mode");
});
item_git.addEventListener("mouseout", (event) => {
  logo_git.classList.remove("skill-mode");
});

var item_her = document.getElementById("heroku");
var logo_her = document.getElementById("heroku-l");
item_her.addEventListener("mouseover", (event) => {
  logo_her.classList.toggle("skill-mode");
});
item_her.addEventListener("mouseout", (event) => {
  logo_her.classList.remove("skill-mode");
});

var email = document.getElementById("email");
var email_d = document.getElementById("email-d");
email.addEventListener("mouseover", (event) => {
  email_d.classList.toggle("skill-mode");
});
email.addEventListener("mouseout", (event) => {
  email_d.classList.remove("skill-mode");
});

var linke = document.getElementById("linke");
var linke_d = document.getElementById("linke-d");
linke.addEventListener("mouseover", (event) => {
  linke_d.classList.toggle("skill-mode");
});
linke.addEventListener("mouseout", (event) => {
  linke_d.classList.remove("skill-mode");
});

// var project = document.getElementById("studio");
// var project_img = document.getElementById("studio-img");
// // var image = project_img.getElementsByTagName("img");
// console.log(project);
// console.log(project_img);
// project.addEventListener("mouseover", (event) => {
//   project_img.classList.toggle("projects-img");
// });
// // item_git.addEventListener("mouseout", (event) => {
// //   logo_git.classList.remove("skill-mode");
// // });

// var q = document.getElementById("q-less");
// var q_img = document.getElementById("q-img");
// // var image = project_img.getElementsByTagName("img");
// q.addEventListener("mouseover", (event) => {
//   q_img.classList.toggle("projects-img");
// });
// // item_git.addEventListener("mouseout", (event) => {
// //   logo_git.classList.remove("skill-mode");
// // });

