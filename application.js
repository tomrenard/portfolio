function hover(element) {
  element.setAttribute('src', 'images/pe2.svg');
}

function unhover(element) {
  element.setAttribute('src', 'images/per1.svg');
}

function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
