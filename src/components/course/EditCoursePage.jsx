import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from './CourseForm';
import { newCourse } from '../../mockData2';
import Spinner from '../shared/Spinner';

import { toast } from 'react-toastify';

function EditCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.error('Loading courses failed' + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        console.error('Loading authors failed' + error);
      });
    }
  }, [props.course]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prev) => ({
      ...prev,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  };

  const formIsValid = () => {
    const { title, authorId, category } = course;
    const errors = {};

    if (!title) errors.title = 'Title is required';
    if (!authorId) errors.author = 'Author is required';
    if (!category) errors.category = 'Category is required';

    setErrors(errors);

    // form is valid if object has no property
    return Object.keys(errors).length === 0;
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.success('Save successful');
        history.push('/courses');
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  };

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <div className='mt-5 py-md-5 px-md-4'>
      <CourseForm
        course={course}
        authors={authors}
        onSave={handleSave}
        onChange={handleChange}
        errors={errors}
        saving={saving}
      />
    </div>
  );
}

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
