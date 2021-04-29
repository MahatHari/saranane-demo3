import React from 'react';
import CourseForm from './CourseForm';
import renderer from 'react-test-renderer';
import { courses, authors } from '../../mockData2';

it("sets submit button label 'Saving ...' when savgin is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn}
      onChange={jest.fn}
      saving
    />
  );
  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when savgin is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn}
      onChange={jest.fn}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
