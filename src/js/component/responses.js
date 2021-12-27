const commentHeaders = document.querySelector('.comment__headers');
const headerWrapper = document.querySelector('.comment__wrapper');

function createResponse() {
  headerWrapper.innerHTML = '';
  const response = document.createElement('div');
  response.className = 'comment__responses';
  //   response.innerText = `${total} Responses`;
  response.innerText = `7 Responses`;
  headerWrapper.insertAdjacentElement('afterbegin', response);
}

createResponse();
