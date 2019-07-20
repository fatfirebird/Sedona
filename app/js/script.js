let video              = document.querySelector('.video-container__video');

let playButton         = document.querySelector('.video-controls__play');
let start              = document.querySelector('.icon-container__item--start');
let pause              = document.querySelector('.icon-container__item--pause');
let volumeButton       = document.querySelector('.video-controls__mute');
let unmuted            = document.querySelector('.icon-container__item--mute-on');
let muted              = document.querySelector('.icon-container__item--mute-off');
let fullscreenButton   = document.querySelector('.video-controls__full-screen');

let seekBar            = document.querySelector('.video-controls__seek-bar');
let volumeBar          = document.querySelector('.video-controls__volume-bar');

playButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (video.paused) {
    video.play();
    start.classList.add('visually-hidden');
    pause.classList.remove('visually-hidden');
  } else {
    video.pause();
    start.classList.remove('visually-hidden');
    pause.classList.add('visually-hidden');
  }
});

volumeButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!video.muted) {
    video.muted = true;
    volumeBar.value = 0;
    unmuted.classList.add('visually-hidden');
    muted.classList.remove('visually-hidden');
  } else {
    video.muted = false;
    volumeBar.value = video.volume;
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
  let time = video.duration * (seekBar.value / 100);

  video.currentTime = time;
});

video.addEventListener('timeupdate', function() {
  let value = (100 / video.duration) * video.currentTime;

  seekBar.value = value;
});

video.addEventListener('click', function() {
  if (video.paused && pause.classList.contains('visually-hidden')) {
    console.log(1);
    video.play();
    start.classList.add('visually-hidden');
    pause.classList.remove('visually-hidden');
  } else {
    video.pause();
    start.classList.remove('visually-hidden');
    pause.classList.add('visually-hidden');
  }
});

video.addEventListener('dblclick', function() {
  if (!video.fullscreenEnabled) {
    video.requestFullscreen();
  }
});

volumeBar.addEventListener('change', function() {
  video.volume = volumeBar.value;
  if (volumeBar.value == 0) {
    unmuted.classList.add('visually-hidden');
    muted.classList.remove('visually-hidden');
  } else {
    unmuted.classList.remove('visually-hidden');
    muted.classList.add('visually-hidden');
  }
})
