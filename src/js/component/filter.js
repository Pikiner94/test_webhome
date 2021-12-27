import { hello } from '../index';

import { num } from '../index';
console.log(num);

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
