function Sounds() {
  var sound = document.getElementById("audio");
  sound.play();
}

// function SoundsPause() {
//   var sound = document.getElementById("audio");
//   sound.pause();
// }


exports.soundModule = Sounds;
