export const CREATE_COURSE = 'CREATE_COURSE';

export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';

export const BEGIN_API_CALL = 'BEGIN_API_CALL';
export const API_CALL_ERROR = 'API_CALL_ERROR';

// it will not call Bgin API call or reduce the api call couunt
// hence if we use the key _"Succss" at the end, it will make
// api call count below zero
export const DELETE_COURSE_OPTIMISTIC = 'DELETE_COURSE_OPTIMISTIC';
