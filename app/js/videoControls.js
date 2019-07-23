var video              = document.querySelector('.video-container__video');
var controls           = document.querySelector('.video-controls');

var playButton         = document.querySelector('.video-controls__play');
var start              = document.querySelector('.icon-container__item--start');
var pause              = document.querySelector('.icon-container__item--pause');
var repeat             = document.querySelector('.icon-container__item--repeat');
var volumeButton       = document.querySelector('.video-controls__mute');
var unmuted            = document.querySelector('.icon-container__item--mute-on');
var muted              = document.querySelector('.icon-container__item--mute-off');
var fullscreenButton   = document.querySelector('.video-controls__full-screen');

var seekBar            = document.querySelector('.video-controls__seek-bar');
var volumeBar          = document.querySelector('.video-controls__volume-bar');
var volumeValue        = [1, 1];

video.controls = false;
controls.classList.remove('visually-hidden');

playButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  videoPlaying();
});

volumeButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (volumeValue[1] != 0) {
    volumeValue[0] = video.volume;
  }
  if (!video.muted) {
    video.muted = true;
    volumeBar.value = 0;
    unmuted.classList.add('visually-hidden');
    muted.classList.remove('visually-hidden');
  } else
  if (video.muted && volumeValue[1] == 0) {
    video.muted = false;
    volumeBar.value = volumeValue[0];
    video.volume = volumeBar.value;
    unmuted.classList.remove('visually-hidden');
    muted.classList.add('visually-hidden');
  } else
  if (video.muted) {
    video.muted = false;
    volumeBar.value = volumeValue[1];
    video.volume = volumeBar.value;
    unmuted.classList.remove('visually-hidden');
    muted.classList.add('visually-hidden');
  }
});

fullscreenButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!video.fullscreenEnabled) {
    video.requestFullscreen();
  }
});

seekBar.addEventListener('change', function() {
  var time = video.duration * (seekBar.value / 100);
  video.currentTime = time;
  if (!repeat.classList.contains('visually-hidden')) {
    repeat.classList.add('visually-hidden');
    start.classList.remove('visually-hidden');
  }
});

video.addEventListener('timeupdate', function() {
  var value = (100 / video.duration) * video.currentTime;
  seekBar.value = value;
});

video.addEventListener('click', videoPlaying);

video.addEventListener('dblclick', function() {
  if (!video.fullscreenEnabled) {
    video.requestFullscreen();
  }
});

volumeBar.addEventListener('change', function() {
  video.volume = volumeBar.value;
  volumeValue[1] = volumeBar.value;
  if (volumeBar.value == 0) {
    video.muted = true;
    unmuted.classList.add('visually-hidden');
    muted.classList.remove('visually-hidden');
  } else {
    volumeValue[0] = volumeValue[1];
    video.muted = false;
    unmuted.classList.remove('visually-hidden');
    muted.classList.add('visually-hidden');
  }
});

video.addEventListener('ended', function() {
    repeat.classList.remove('visually-hidden');
    pause.classList.add('visually-hidden');
    start.classList.add('visually-hidden');
});

function videoPlaying() {
  if (video.paused && !repeat.classList.contains('visually-hidden')) {
    video.play();
    repeat.classList.add('visually-hidden');
    pause.classList.remove('visually-hidden');
  } else
  if (video.paused) {
    video.play();
    start.classList.add('visually-hidden');
    pause.classList.remove('visually-hidden');
  } else {
    video.pause();
    start.classList.remove('visually-hidden');
    pause.classList.add('visually-hidden');
  }
}
