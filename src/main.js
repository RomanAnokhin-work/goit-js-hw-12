import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.js-load-more');

let page = 1;
let inputValue = '';
let hitsCounter = 0;

form.addEventListener('submit', hendlerSubmit);
loadMoreBtn.addEventListener('click', loadMore);

async function hendlerSubmit(event) {
  event.preventDefault();

  inputValue = event.target.elements.search.value.toLowerCase().trim();

  if (!inputValue) {
    showWarning('Please enter a search query');
    return;
  }

  showLoader();
  clearGallery();

  try {
    const { hits, totalHits } = await getImagesByQuery(inputValue, page);
    createGallery(hits);

    hitsCounter += hits.length;

    checkHits(totalHits);
  } catch (error) {
    showQueryError(error.message);
  } finally {
    hideLoader();
  }
}

async function loadMore(event) {
  page += 1;
  loadMore.disabled = true;
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(inputValue, page);
    createGallery(hits, page);

    hitsCounter += hits.length;

    checkHits(totalHits);
  } catch (error) {
    showQueryError(error.message);
  } finally {
    hideLoader();
    loadMore.disabled = false;
  }
}

function checkHits(totalHits) {
  if (hitsCounter >= totalHits) {
    loadMoreBtn.classList.replace('load-more', 'load-more-hidden');

    showWarning("We're sorry, but you've reached the end of search results.");
  } else {
    loadMoreBtn.classList.replace('load-more-hidden', 'load-more');
  }
}

function showQueryError(message) {
  iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    iconColor: '#fff',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    iconUrl: './img/error-icon.svg',
    message:
      message ||
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 3000,
    close: true,
  });
}

function showWarning(message) {
  iziToast.warning({
    title: 'Caution',
    message: message,
    position: 'topRight',
    timeout: 3000,
    close: true,
  });
}
