import { createComment } from './comment';

function filterComment(createArray) {
  console.log(createArray[0].created_at);

  console.log(createArray[0].created_at.substring(0, 10));
  // console.log(createArray.sort((a, b) => a.created_at - b.created_at));
  // console.log(createArray.sort((a, b) => b.created_at - a.created_at));

  const filter = document.querySelectorAll('.filter');
  filter.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      if (e.target.innerText === 'Most Liked') {
        createComment(createArray.sort((a, b) => b.like - a.like));
      } else if (e.target.innerText === 'Newest') {
        console.log('Newest');
        createComment(createArray.sort((a, b) => a.created_at - b.created_at));
      }
    });
  });
}

export { filterComment };
