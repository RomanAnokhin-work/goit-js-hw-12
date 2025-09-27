import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  checkHits,
  loadMoreBtn,
} from './js/render-functions.js';

const form = document.querySelector('.form');

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
  clearForm();

  try {
    const { hits, totalHits } = await getImagesByQuery(inputValue, page);
    createGallery(hits);

    hitsCounter += hits.length;

    checkHits(hitsCounter, totalHits);
  } catch (error) {
    showQueryError(error.message);
  } finally {
    hideLoader();
  }
}

async function loadMore(event) {
  page += 1;
  loadMoreBtn.disabled = true;
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(inputValue, page);
    createGallery(hits, page);

    hitsCounter += hits.length;

    checkHits(hitsCounter, totalHits);
  } catch (error) {
    showQueryError(error.message);
  } finally {
    hideLoader();
    loadMoreBtn.disabled = false;
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
function clearForm() {
  page = 1;
  hitsCounter = 0;
}
