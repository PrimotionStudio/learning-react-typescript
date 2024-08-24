import React from 'react';
import './InputField.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  addTask: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, addTask }) => {

  console.log(todo);

  return (
    <form className='taskInputDiv' onSubmit={addTask}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='taskInput'
        placeholder='Write your task here' />
      <button className="saveButton" type='submit'>Save</button>
    </form>
  );
};

export default InputField;
