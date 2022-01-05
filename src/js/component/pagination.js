import { getData } from '../index';

const pagination = document.querySelector('.pagination');
const nextPage = document.querySelector('.pagination__next');
const prevPage = document.querySelector('.pagination__prev');

function createPug(next_page_url) {
  nextPage.addEventListener('click', () => {
    getData(next_page_url);
  });
}

export { createPug };
