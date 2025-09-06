const rick = document.getElementById('popup');
const audio = document.getElementById('audio');

function show() {
  rick.style.display = 'block';
  void rick.offsetWidth;
  rick.classList.add('animate');
  audio.currentTime = 0;
  audio.play();
  setTimeout(hide, 5000);
}

function hide() {
  rick.classList.remove('animate');
  rick.style.display = 'none';
  audio.pause();
  audio.currentTime = 0;
  random();
}

function random() {
  const interval = Math.floor(Math.random() * (30 - 15 + 1) + 15) * 1000;
  console.log('rick in', interval / 1000);
  setTimeout(show, interval);
}

function start() {
  random();
}

document.body.addEventListener('click', start, { once: true });
