import React from 'react';

function Spinner() {
  return (
    <div className='modal-dialog modal-dialog-centered'>
      <div className='spinner-border text-primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
