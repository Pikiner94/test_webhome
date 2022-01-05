import '../sass/style.scss';
import { filterComment } from './component/filter';
import { createResponse } from './component/responses';
import { createComment } from './component/comment';
import { createPug } from './component/pagination';
let url = 'https://jordan.ashton.fashion/api/goods/30/comments?page=1';

function getData(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(({ data, total, next_page_url, prev_page_url }) => {
      let createArray = data.map(({ name, text, created_at }) => {
        return {
          name: name,
          text: text,
          like: Math.round(Math.random() * 20),
          created_at: created_at,
        };
      });
      createComment(createArray);
      createResponse(total);
      filterComment(createArray);
      createPug(createArray, next_page_url, prev_page_url);
    });
}

getData(url);

export { getData };
