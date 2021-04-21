import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function courseReducer(state = initalState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }]; // creates all state array and adds whats passed from action

    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );

    default:
      return state;
  }
}
