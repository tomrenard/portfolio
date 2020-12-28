// Gradient mode

function myGradientFunction() {
  var element = document.body;
  var item = document.getElementById("gradient");
  element.classList.toggle("gradient-mode");
   }

// Languages

function Grosselang() {
  var lang = document.getElementById("lang");
  if (lang.textContent == "/FR") {
    lang.textContent = "/EN";}
  else {
    lang.textContent = "/FR";}
}

function showLocale() {
  var lang = document.getElementById("lang");
  var lang_fr = document.querySelector(".LocaleFr");
  var abt_fr = document.querySelector(".french");
  var lang_en = document.querySelector(".LocaleEn");
      if (lang.textContent == "/FR")
      {
        lang_en.classList.remove('hiddenLocale');
        lang_fr.classList.toggle('hiddenLocale');
      }
      else
      {
        lang_fr.classList.remove('french');
        lang_fr.classList.remove('hiddenLocale');
        lang_en.classList.toggle('hiddenLocale');
      }
}

// Works list

var works = document.querySelectorAll('.work');
works.forEach(a => a.addEventListener("mouseover", hiddenFunction));
works.forEach(a => a.addEventListener("mouseout", hiddenFunction2));

function hiddenFunction () {
  var desc = document.querySelectorAll('.desc');
  desc.forEach(p => p.classList.toggle("ghost"));
}

function hiddenFunction2 () {
  var desc = document.querySelectorAll('.desc');
  desc.forEach(p => p.classList.remove("ghost"));
}

// Skills list

var skills = document.querySelectorAll('.skill');
skills.forEach(a => a.addEventListener("mouseover", logoFunction));
skills.forEach(a => a.addEventListener("mouseout", logoRemoveFunction));

function logoFunction () {
  var logos = document.querySelectorAll('.logo');
  logos.forEach(p => p.classList.add("skill-mode"));
}

function logoRemoveFunction () {
  var logos = document.querySelectorAll('.logo');
  logos.forEach(p => p.classList.remove("skill-mode"));
}

// Contact links

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

// SpeechRecognition

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  var recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  recognition.continuous = true;

  var footer = document.querySelector('.footer-opening');
  var splash = document.querySelector('.splash');

  recognition.addEventListener('result', e => {
    var transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      if (transcript.includes('hi')) {
        splash.classList.add("fade-in");
        footer.classList.add("fade-in");
        recognition.stop()
      }

  });

var skip_button = document.querySelector('.splash button');

function opacitation() {
  var splash = document.querySelector('.splash');
  var footer = document.querySelector('.footer-opening');
  splash.classList.add("fade-in")
  footer.classList.add("fade-in");
}

recognition.start();
