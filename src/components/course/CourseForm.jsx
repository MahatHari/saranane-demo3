import React from 'react';
import InputText from '../shared/InputText';
import InputSelect from '../shared/InputSelect';

const CourseForm = (
  course,
  authors = {},
  onSave,
  onChange,
  saving = false,
  errors = {}
) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? 'Edit' : 'Add'} Course</h2>
      {errors.onSave && (
        <div className='alert alert-danger' role='alert'>
          {errors.onSave}
        </div>
      )}
      <InputText
        name='title'
        label='Title'
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <InputSelect
        name='authorId'
        label='Author'
        value={course.authorId || ''}
        defaultOption='Select Author'
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={onChange}
        error={errors.author}
      />
      <InputText
        name='category'
        label='Category'
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <button type='button' disabled={saving} className='btn btn-primary'>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default CourseForm;
