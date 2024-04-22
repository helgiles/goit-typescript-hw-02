import axios, { AxiosResponse } from 'axios';
import { Image } from '../types';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchImages = async (query: string, page: number): Promise<Image[]> => {
  try {
    const response: AxiosResponse = await axios.get<Image[]>('/search/photos', {
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
  } catch (error) {
    throw new Error(`Error fetching images: ${error}`);
  }
};

export default fetchImages;
