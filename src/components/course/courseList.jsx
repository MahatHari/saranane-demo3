import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => (
  <div className='table-responsive'>
    <table className='table'>
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <a
                  className='btn btn-light'
                  href={'http://pluralsight.com/courses/' + course.slug}
                >
                  Watch
                </a>
              </td>
              <td>
                <Link to={'/course/' + course.slug} style={{ color: 'white' }}>
                  {course.title}
                </Link>
              </td>
              <td style={{ color: 'white' }}>{course.authorName}</td>
              <td style={{ color: 'white' }}>{course.category}</td>
              <td style={{ color: 'white' }}>
                <button className='btn btn-danger' style={{ color: 'black' }}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
