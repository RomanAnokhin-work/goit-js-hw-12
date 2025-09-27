import axios from 'axios';
const myApiKey = '52360469-04a0681cd82a25280493158e1';

export async function getImagesByQuery(query, page = 1) {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: myApiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  if (data.hits.length === 0) {
    throw new Error(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }

  console.log(data);

  return data;
}
