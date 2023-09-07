// get the source to the image and button
let pacmanStatus = document.getElementById("pacmanStatus");
let toggleButton = document.getElementById("toggleButton");

// door status 
let isPacmanMouthOpen = false;
function toggleDoor() {
    if (isPacmanMouthOpen) {
      let snd = new Audio('Songs/PacMan_eating.mp3')
     snd.play() //play the music
      pacmanStatus.src = "Images/pacman_closed.png";
        isPacmanMouthOpen = false;
    } else {
      let snd = new Audio('Songs/PacMan_eating.mp3')
     snd.play()
      pacmanStatus.src = "Images/pacman_open.png";
        isPacmanMouthOpen = true;
    }
}
toggleButton.addEventListener("click", toggleDoor);


// var mySquare = document.getElementById("blue_square");
// var btn1 = document.getElementById("btn1");
// function toDisappear() {
//   mySquare.classList.toggle("nothing");
// }
