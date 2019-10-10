import axios from 'axios';

const baseUrl = '/api';
const userApiUrl = `${baseUrl}/user`;
const createConfig = () => ({
  headers: {
    'CSRF-Token': document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute('content')
  }
});

export const postUser = (params) => axios.post(userApiUrl, params, createConfig());
// export const get = () => (axios.get(userApiUrl));
