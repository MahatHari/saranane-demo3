import { handleResponse, handleError } from './apiUtils';

const API_URL = 'http://localhost:3001';
const baseUrl = API_URL + '/authors/';

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
