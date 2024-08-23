import React from 'react';
import './InputField.css';

const InputField = () => {
  return (
    <form className='taskInputDiv'>
      <input type="text" className='taskInput' placeholder='Write your task here' />
      <button className="saveButton" type='submit'>Save</button>
    </form>
  );
};

export default InputField;
