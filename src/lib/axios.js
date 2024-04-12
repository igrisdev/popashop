import api from 'axios'

export const axios = api.create({
  // baseURL: 'http://localhost:3000/',
  withCredentials: true,
})