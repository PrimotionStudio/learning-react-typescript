import React, { useState } from 'react';
import { MdEdit, MdDone, MdDelete } from "react-icons/md";
import Todo from '../Model';
import './TodoSingle.css';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoSingle: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [editState, setEditState] = useState<boolean>(false);
    console.log(`EditState: ${editState}`);

    const [editValue, setEditValue] = useState<string>(todo.task);
    const handleDone = (id: number) => {
        setTodos(todos.map(
            (todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        )
    };
    const handleEdit = (id: number) => { };
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id || todo.isDone === false));
        console.log('Cannot delete a task that has not been done');
    };
    return (
        <form className='card' >
            <ul>
                {
                    (editState === true) ? (
                        <input
                            type="text"
                            onChange={(e) => (setTodos(todos.map((_todo) => {
                                if (_todo.id !== todo.id) return _todo;
                                else {
                                    _todo.task = e.target.value;
                                    return _todo;
                                }
                            })))}
                            value={todo.task}
                        />
                    ) : (
                        // <li>id: {todo.id}</li>
                        <li>
                            {
                                todo.isDone ? (<del>{todo.task}</del>) : (<>{todo.task}</>)
                            }
                        </li>
                        // <li>isDone: {(todo.isDone) ? 'Done' : 'Not Done'}</li>
                    )
                }
            </ul>
            <span>
                <span className="icon" onClick={
                    () => {
                        if (!editState && !todo.isDone) { setEditState(!editState) };
                    }
                }>
                    <MdEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <MdDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </span>
        </form >
    )
};

export default TodoSingle
