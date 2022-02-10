'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (event) => {
  const thumbnail = event.target.closest('a');
  
  if (!thumbnail) {
    return;
  }

  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
});

const showThumbnail = (href, title) => {
  largeImg.src = href;
  largeImg.alt = title;
};