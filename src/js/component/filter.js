import { createComment } from './comment';

function filterComment(createArray) {
  const filter = document.querySelectorAll('.filter');
  filter.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      if (e.target.innerText === 'Most Liked') {
        createComment(createArray.sort((a, b) => b.like - a.like));
      } else if (e.target.innerText === 'Newest') {
        createComment(
          createArray.sort(
            (b, a) => new Date(a.created_at) - new Date(b.created_at)
          )
        );
      } else if (e.target.innerText === 'Oldest') {
        createComment(
          createArray.sort(
            (b, a) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
      }
    });
  });
}

export { filterComment };
