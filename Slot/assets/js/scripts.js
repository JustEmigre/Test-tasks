const icon = document.querySelectorAll('.icon');
const icons = [...icon];
const iconHeight = icons[0].clientHeight;
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');

// Start
btnStart.addEventListener('click', () => {
  btnStart.classList.add('disabled');
  btnStop.classList.remove('disabled');

  TweenMax.fromTo(
    icons,
    0.1,
    {
      y: 0,
    },
    {
      y: 0 - iconHeight * icons.length,
      ease: Linear.easeNone,
    }
  ).repeat(-1);
});

// Stop
btnStop.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * (39 - 1) + 1);

  console.log(`'Winning number:' ${randomNumber + 2}`);

  btnStop.classList.add('disabled');

  // Slow stop
  TweenMax.to(icons, 1.3, {
    y: 0 - iconHeight * randomNumber,
    ease: Linear.ease,
  });

  setTimeout(() => {
    btnStart.classList.remove('disabled');
  }, 1000);
});
