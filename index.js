var buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    handleClick(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
});

document.addEventListener("keydown", function(event) {
  handleClick(event.key);
    buttonAnimation(event.key);
});

function handleClick(key_stroke) {
  switch (key_stroke) {

    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kill = new Audio('sounds/kick-bass.mp3');
      kill.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(key_stroke){

  var activeButton = document.querySelector("." + key_stroke);

activeButton.classList.add("pressed");

  setTimeout(function(){ activeButton.classList.remove("pressed"); },100);
}
