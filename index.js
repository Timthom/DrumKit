//Drum kit

//Detecting button press
let numberOfDrumButton = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButton; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function checkClick() {
      //alert("It works");
      //console.log(this);
      //this.style.color = "White";

      let buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard press
document.addEventListener("keydown", function (event) {
  //alert("Key was pressed!");
  //console.log(event);
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let hihat = new Audio("sounds/open-hihat.mp3");
      hihat.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "m":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "n":
      let clap = new Audio("sounds/clap.mp3");
      clap.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

//Animation function

function buttonAnimation(currentkey) {
  let activButton = document.querySelector("." + currentkey);

  activButton.classList.add("pressed");

  setTimeout(function () {
    activButton.classList.remove("pressed");
  }, 100);
}
