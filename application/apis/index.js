import axios from 'axios';

const baseUrl = '/api';
const createConfig = () => ({
  headers: {
    'CSRF-Token': document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute('content')
  }
});

const userApiUrl = `${baseUrl}/user`;
export const postUser = (data) => axios.post(userApiUrl, data, createConfig());
export const patchUser = (data) => axios.patch(userApiUrl, data, createConfig());

const logInApiUrl = `${baseUrl}/login`;
export const postLogin = (data) => axios.post(logInApiUrl, data, createConfig());

const farmApiUrl = `${baseUrl}/farm`;
export const postFarm = (data) => axios.post(farmApiUrl, data, createConfig());
