import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './courseList';

function CoursesPage({ courses, authors, actions }) {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);
  useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        console.error('Loading courses failed' + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        console.error('Loading authors failed' + error);
      });
    }
  }, [courses.length, authors.length, actions]);

  return (
    <div className='mt-5 py-md-5 px-md-4'>
      {redirectToAddCoursePage && <Redirect to='/course' />}
      <h2>Courses</h2>
      <button
        style={{ marginBottom: 20 }}
        className='btn btn-primary add-course'
        onClick={() => setRedirectToAddCoursePage(true)}
      >
        Add Course
      </button>
      <CourseList courses={courses} />
    </div>
  );
}

// Redux=>passing pops and connecting store with CoursePage

CoursesPage.prototypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

// courses is state.courses => from store
function mapStateToProps({ courses, authors }) {
  return {
    authors,
    courses:
      authors.length === 0
        ? []
        : courses.map((course) => {
            return {
              ...course,
              authorName: authors.find((a) => a.id === course.authorId).name,
            };
          }),
  };
}
// Dispatching actions to store using bindActionCreators
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
};
/* // Dispatching actions as object
const mapDispatchToProps = {
  createCourse:courseActions.createCourse
} */

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
