function buttonAnimaton(currentKey) {
  var activeButton = document.querySelector("." + currentKey); //currentKey is a single character w,s,d etc, but here we want class i.e. .w, .s, .d, etc
  activeButton.classList.add("pressed"); //so that it gets the opacity on clicked
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); //after 100 ms remove the class to give animation
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML); //this means the button object that triggers the "click" event, each button has the key as innerHTML
    buttonAnimaton(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key); //event gives the keyboard element that was pressed, event.key gives the key that was pressed, key is a property
  buttonAnimaton(event.key);
});
