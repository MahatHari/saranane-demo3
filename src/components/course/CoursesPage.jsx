import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './courseList';
import Spinner from '../shared/Spinner';
import { toast } from 'react-toastify';

function CoursesPage({ courses, authors, loading, actions }) {
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

  const handleDeleteCourse = async (course) => {
    toast.success('course deleted');
    try {
      await actions.deleteCourse(course);
    } catch (error) {
      toast.error('Delete Failed' + error.message, { autoClose: false });
    }
    /* actions.deleteCourse(course).catch((error) => {
      toast.error('Delete Failed' + error.message, { autoClose: false });
    }); */
  };
  return (
    <div className='mt-5 py-md-5 px-md-4'>
      {redirectToAddCoursePage && <Redirect to='/course' />}
      <h2>Courses</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className='btn btn-primary add-course'
            onClick={() => setRedirectToAddCoursePage(true)}
          >
            Add Course
          </button>
          <CourseList courses={courses} onDeleteClick={handleDeleteCourse} />
        </>
      )}
    </div>
  );
}

// Redux=>passing pops and connecting store with CoursePage

CoursesPage.prototypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

// courses is state.courses => from store
function mapStateToProps({ courses, authors, apiCallsInProgress }) {
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
    loading: apiCallsInProgress > 0,
  };
}
// Dispatching actions to store using bindActionCreators
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
};
/* // Dispatching actions as object
const mapDispatchToProps = {
  createCourse:courseActions.createCourse
} */

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
