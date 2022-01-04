import '../sass/style.scss';
import { filterComment } from './component/filter';
import { createResponse } from './component/responses';
import { createComment } from './component/comment';
let url = 'https://jordan.ashton.fashion/api/goods/30/comments?page=1';
const list = document.querySelector('.pagination__list');

// const filter = document.querySelectorAll('.filter');

function getData(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(({ data, total }) => {
      let createArray = data.map(({ name, text, created_at }) => {
        return {
          name: name,
          text: text,
          like: Math.round(Math.random() * 20),
          created_at: created_at,
        };
      });
      // createPug(createArray);
      createComment(createArray);
      createResponse(total);
      filterComment(createArray);
    });
}

function createPug(data) {
  list.innerHTML = '';
  let current_page = data.current_page;
  let numPag = [1, 2, 3, 4];
  numPag.forEach((elem) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerText = elem;
    list.append(li);
  });

  let modifPag = numPag.map((elem) => {
    return current_page++;
  });
}

// list.addEventListener('click', (e) => {
//   url = `https://jordan.ashton.fashion/api/goods/30/comments?page=${e.target.innerText}`;
//   getData(url);
// });

getData(url);
