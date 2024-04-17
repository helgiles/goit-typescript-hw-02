import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchImages = async (query, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 20,
    },
    headers: {
      Authorization: 'Client-ID 1_T2Z_PXbBIyok7sotVbxFZ8_-r6hbsLFraii-A0O2w',
      'Accept-Version': 'v1',
    },
  });

  return response.data.results;
};

export default fetchImages;
