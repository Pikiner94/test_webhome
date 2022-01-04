const commentHeaders = document.querySelector('.comment__headers');
const headerWrapper = document.querySelector('.comment__wrapper');

export { createResponse };

function createResponse(total) {
  headerWrapper.innerHTML = '';
  const response = document.createElement('div');
  response.className = 'comment__responses';
  response.innerText = `${total} Responses`;
  headerWrapper.insertAdjacentElement('afterbegin', response);
}
