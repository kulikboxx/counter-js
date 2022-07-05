const countersParent = document.querySelector('.counters');
const counters = countersParent.querySelectorAll('[data-count]');
const duration = 800;
const threshold = 2;

function updateCounters() {
  counters.forEach((counter) => {
    let count = parseInt(counter.textContent);
    let dataCount = +counter.getAttribute('data-count');
    let num = dataCount / duration;

    let timer = setInterval(() => {
      counter.textContent = Math.floor((count += num)) + '+';

      if (count >= dataCount) {
        clearInterval(timer);
        counter.textContent = dataCount + '+';
      }
    });
  });
}

function onScrollUpdate() {
  const scrollY = countersParent.getBoundingClientRect().y;

  if (scrollY <= window.innerHeight - countersParent.offsetHeight / threshold) {
    updateCounters();
    window.removeEventListener('scroll', onScrollUpdate);
  }
}

window.addEventListener('scroll', onScrollUpdate);
