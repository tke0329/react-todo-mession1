import {useTodos} from '../hooks/useTodos'
import type {Form} from '../types/Form';

interface ItemProps {
    todos: Form;
}

const TodoItems = ({todos}:ItemProps) => {

    const {deleteTodo, toggleTodo} = useTodos();

    return (
        <li key={todos.id}>
            <input type="checkbox" checked={todos.completed} onChange={() => toggleTodo(todos.id)}/>
            {todos.id} / {todos.todo} / {todos.completed? "완료" : "진행중"}
            <button onClick={() => deleteTodo(todos.id)}>삭제</button>
        </li>
    )

}

export default TodoItems