import axios from 'axios';

const baseUrl = '/apis';
const userApiUrl = `${baseUrl}/user`;

export const postUser = (params) => axios.post(userApiUrl, params);
// export const get = () => (axios.get(userApiUrl));
