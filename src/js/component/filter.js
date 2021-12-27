import { hello } from '../index';

hello();

const filter = document.querySelectorAll('.filter');
filter.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (e.target.innerText === 'Most Liked') {
      MostLiked();
    }
  });
});

function MostLiked() {
  console.log('Работает');
}
