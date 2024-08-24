import React from 'react'
import Todo from '../Model'
import './TodoList.css'
import { MdEdit, MdDone, MdDelete } from "react-icons/md";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todoList'>
            {
                todos.map((todo) => (
                    <div className='card' >
                        <ul>
                            <li>id: {todo.id}</li>
                            <li>task: {todo.task}</li>
                            <li>isDone: {(todo.isDone) ? 'Done' : 'Not Done'}</li>
                        </ul>
                        <span>
                            <MdEdit className='icon' />
                            <MdDelete className='icon' />
                            <MdDone className='icon' />
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

export default TodoList
