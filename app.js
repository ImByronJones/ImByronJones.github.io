function replayVideo(video) {
  video.currentTime = 0;
  video.play();
}

function toggleMute(video, button) {
  if(video.muted) {
    video.muted = false;
    button.textContent = "Mute";
  } else {
    video.muted = true;
    button.textContent = "Unmute";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // var replayButton = document.getElementById('proj-2-replay');

  // replayButton.addEventListener('click', function() {
  //   replayVideo(video2);
  // });

  // var replayButton2 = document.getElementById('proj-1-replay');
  // var video1 = document.getElementById('proj-1');

  // replayButton2.addEventListener('click', function() {
  //   replayVideo(video1);
  // });

  // var replayButton3 = document.getElementById('proj-3-replay');
  // var video3 = document.getElementById('proj-3');

  // replayButton3.addEventListener('click', function() {
  //   replayVideo(video3);
  // })

  // var replayButton4 = document.getElementById('proj-4-replay');
  // var video4 = document.getElementById('proj-4');

  // replayButton4.addEventListener('click', function() {
  //   replayVideo(video4);
  // })

  var muteButton = document.getElementById('mute');
  var video2 = document.getElementById('proj-2');
  
  muteButton.addEventListener('click', function() {
    toggleMute(video2, muteButton);
  })
});