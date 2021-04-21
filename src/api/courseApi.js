import { handleResponse, handleError } from './apiUtils';
const API_URL = 'http://localhost:3001';
const baseUrl = API_URL + '/courses/';

export const getCourses = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};

// course post and update
export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ''), {
    method: course.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(course),
  })
    .then(handleResponse)
    .catch(handleError);
}

// deleting of course
export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
