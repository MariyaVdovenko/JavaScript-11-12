'use strict';
import galleryItemsData from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');

const test = createGallery(galleryItemsData);

function createGallery(galleryItemsData) {
  galleryItemsData.forEach(function(galleryItemData, i) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
    gallery.appendChild(galleryItem);

    const previewLink = document.createElement('a');
    previewLink.classList.add('gallery__link');
    previewLink.setAttribute('href', galleryItemsData[i].original);
    galleryItem.appendChild(previewLink);

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.setAttribute('src', galleryItemsData[i].preview);
    galleryImg.setAttribute('data-source', galleryItemsData[i].original);
    galleryImg.setAttribute('alt', galleryItemsData[i].description);
    previewLink.appendChild(galleryImg);

    const galleryIcon = document.createElement('span');
    galleryIcon.classList.add('gallery__icon');
    galleryItem.appendChild(galleryIcon);

    const icons = document.createElement('i');
    icons.classList.add('material-icons');
    icons.textContent = 'zoom_out_map';

    galleryIcon.appendChild(icons);
  });
}

gallery.addEventListener('click', openModal);
const overlay = document.querySelector('.overlay');

function openModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  overlay.classList.add('is-visible');
  const overlayImg = document.querySelector('.overlay-img');
  overlayImg.setAttribute('src', e.target.dataset.source);
  window.addEventListener('keydown', handleKeyPress);
}

/// Закрыть модальное окно
const closeModalBTN = document.querySelector(
  'button[data-action="close-modal"]',
);
closeModalBTN.addEventListener('click', closeModal);
overlay.addEventListener('click', handleBackDropClick);

function closeModal() {
  overlay.classList.remove('is-visible');
  window.removeEventListener('keydown', handleKeyPress);
}
// Escape
function handleKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }

  closeModal();
}

function handleBackDropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }

  closeModal();
}
