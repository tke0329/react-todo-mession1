import {useTodos} from '../hooks/useTodos'


const TodoItems = ({todos}) => {

    const {deleteTodo, toggleTodo} = useTodos();

    return (
        <li key={todos.id}>
            <input type="checkbox" checked={todos.isDone} onChange={() => toggleTodo(todos.id)}/>
            {todos.id} / {todos.text} / {todos.isDone? "완료" : "진행중"}
            <button onClick={() => deleteTodo(todos.id)}>삭제</button>
        </li>
    )

}

export default TodoItems