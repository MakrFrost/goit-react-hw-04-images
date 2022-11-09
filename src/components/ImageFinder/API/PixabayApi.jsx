import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '30054612-8d338f00f07d687f9e2b96ac6';
const API_SETTINGS = 'image_type=photo&orientation=horizontal&per_page=12';

function FetchPixabay(find, page) {
  const responce = axios.get(
    `${API_URL}?q=${find}&page=${page}&key=${API_KEY}&${API_SETTINGS}`
  );
  return responce;
}

export default FetchPixabay;
