function myGradientFunction() {
   var element = document.body;
   element.classList.toggle("gradient-mode");
}

function myWeirdFunction() {
   var element = document.body;
   element.classList.toggle("weird-mode");
}

var q_less = document.getElementById("q-less");
var desc1 = document.getElementById("desc1");
var desc2 = document.getElementById("desc2");
var desc3 = document.getElementById("desc3");
q_less.addEventListener("mouseover", (event) => {
  desc1.classList.toggle("ghost");
  desc2.classList.toggle("ghost");
  desc3.classList.toggle("ghost");
});
q_less.addEventListener("mouseout", (event) => {
  desc1.classList.remove("ghost");
  desc2.classList.remove("ghost");
  desc3.classList.remove("ghost");
});

var studio = document.getElementById("studio");
var desc1 = document.getElementById("desc1");
var desc2 = document.getElementById("desc2");
var desc3 = document.getElementById("desc3");
studio.addEventListener("mouseover", (event) => {
  desc1.classList.toggle("ghost");
  desc2.classList.toggle("ghost");
  desc3.classList.toggle("ghost");
});
studio.addEventListener("mouseout", (event) => {
  desc1.classList.remove("ghost");
  desc2.classList.remove("ghost");
  desc3.classList.remove("ghost");
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



