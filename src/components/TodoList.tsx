import React from 'react'
import Todo from '../Model'
import TodoSingle from './TodoSingle';
import './TodoList.css';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todoList'>
            {
                todos.map((todo) => (
                    <TodoSingle todo={todo} todos={todos} setTodos={setTodos} />
                ))
            }
        </div>
    );
};

export default TodoList
