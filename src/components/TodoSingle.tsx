import React from 'react';
import { MdEdit, MdDone, MdDelete } from "react-icons/md";
import Todo from '../Model';
import './TodoSingle.css';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoSingle: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const handleDone = (id: number) => {
        setTodos(todos.map(
            (todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        )
    };
    const handleEdit = (id: number) => { };
    const handleDelete = (id: number) => {
        // filters todo where todo.id does not match id and todo.isDone is not done
        setTodos(todos.filter((todo: Todo) => todo.id !== id && todo.isDone === false)); // TODO: Fix Here
    };
    return (
        <form className='card' >
            <ul>
                {/* <li>id: {todo.id}</li> */}
                <li>
                    {
                        todo.isDone ? (<del>{todo.task}</del>) : (<>{todo.task}</>)
                    }
                </li>
                {/* <li>isDone: {(todo.isDone) ? 'Done' : 'Not Done'}</li> */}
            </ul>
            <span>
                <span className="icon" onClick={() => handleEdit(todo.id)}>
                    <MdEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <MdDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </span>
        </form>
    )
};

export default TodoSingle
