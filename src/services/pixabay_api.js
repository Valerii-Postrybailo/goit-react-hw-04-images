import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "29743912-8e7685db13f3781653d214456";
const BASE_FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';

export const loadImage = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&${BASE_FILTERS}`);
    const images = response.data.hits.map(img => {
      // console.log(images)
        const {id, largeImageURL, webformatURL, tags } = img;
          return {
            id,
            largeImageURL,
            webformatURL,
            tags,
        }})
    return images;
};