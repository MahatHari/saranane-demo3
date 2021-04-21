import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from './CourseForm';
import { newCourse } from '../../mockData2';
//import { getCourseBySlug } from '';

function EditCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) {
  const [course, setcourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.error('Loading courses failed' + error);
      });
    } else {
      setcourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        console.error('Loading authors failed' + error);
      });
    }
  }, [props.course]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setcourse((prev) => ({
      ...prev,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  };
  const handleSave = (event) => {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push('/courses');
    });
  };

  return (
    <div className='mt-5 py-md-5 px-md-4'>
      <h2>Edit Course</h2>
      <CourseForm
        course={course}
        errors={errors}
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </div>
  );
}

// Redux=>passing pops and connecting store with CoursePage

/* CoursesPage.prototypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
}; */
export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

// courses is state.courses => from store
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}
// Dispatching actions to store as an Object
//can still be shortned by using named imports for loadCourses and loadAuthors on top
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

/* // Dispatching actions as object
const mapDispatchToProps = {
  createCourse:courseActions.createCourse
} */

export default connect(mapStateToProps, mapDispatchToProps)(EditCoursePage);
