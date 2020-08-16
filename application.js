function hover(element) {
  element.setAttribute('src', 'images/perso2.svg');
}

function unhover(element) {
  element.setAttribute('src', 'images/perso1.svg');
}

function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
