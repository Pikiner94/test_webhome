import '../sass/style.scss';
import './component/filter';
import './component/responses';

let url = 'https://jordan.ashton.fashion/api/goods/30/comments?page=1';
const list = document.querySelector('.pagination__list');
const commentItem = document.querySelector('.comment__item');

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
      createPug(createArray);
      createComment(data, total);
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

function dayFromCreate(created_at) {
  const oneDay = 24 * 60 * 60 * 1000;
  const dataUpdatePost = new Date(created_at.substring(0, 19));
  const now = new Date();
  const diffDays = Math.round(Math.abs(dataUpdatePost - now) / oneDay);
  return diffDays;
}

function createComment(data, total) {
  //   commentItem.innerHTML = '';
  // headerWrapper.innerHTML = '';
  // const response = document.createElement('div');
  // response.className = 'comment__responses';
  // response.innerText = `${total} Responses`;
  // headerWrapper.insertAdjacentElement('afterbegin', response);
  // commentItem.innerHTML = '';

  data.forEach(({ name, text, created_at }) => {
    let likeCounter = Math.round(Math.random() * 20);
    const item = document.createElement('div');
    item.className = 'item';
    const divFoto = document.createElement('div');
    divFoto.className = 'foto';
    const img = document.createElement('img');
    img.className = 'img';
    divFoto.append(img);
    const heards = document.createElement('heards');
    heards.className = 'heards';
    heards.innerText = likeCounter;
    const divText = document.createElement('div');
    divText.className = 'text';
    const divName = document.createElement('div');
    divName.className = 'name';
    divName.innerText = name;
    const divPertext = document.createElement('div');
    divPertext.className = 'pertext';
    divPertext.innerText = text;
    const divDate = document.createElement('div');
    divDate.className = 'date_time';
    const data = document.createElement('div');
    data.className = 'date';
    const time = document.createElement('div');
    time.className = 'time';
    commentItem.append(item);
    divDate.append(data, time);
    item.append(divFoto, heards, divText, divDate);
    divText.append(divName, divPertext);
    data.innerText = `${dayFromCreate(created_at)}day ago`;
    time.innerText = created_at.substring(11, 19);
  });
}

export function hello() {
  console.log('Привет');
}

const num = 1;

export { num };
