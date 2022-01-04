const commentItem = document.querySelector('.comment__item');

function createComment(data) {
  commentItem.innerHTML = '';
  data.forEach(({ name, text, created_at, like }) => {
    const item = document.createElement('div');
    item.className = 'item';
    const divFoto = document.createElement('div');
    divFoto.className = 'foto';
    const img = document.createElement('img');
    img.className = 'img';
    divFoto.append(img);
    const heards = document.createElement('heards');
    heards.className = 'heards';
    heards.innerText = like;
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

function dayFromCreate(created_at) {
  const oneDay = 24 * 60 * 60 * 1000;
  const dataUpdatePost = new Date(created_at.substring(0, 19));
  const now = new Date();
  const diffDays = Math.round(Math.abs(dataUpdatePost - now) / oneDay);
  return diffDays;
}
export { createComment };
