import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.10:5002/v1/',
});

export const signup = data => api.post('/auth/signup', data);

export const verify = data =>
  api.post(`/auth/email-verification/${data.token}`, { code: data.code });
