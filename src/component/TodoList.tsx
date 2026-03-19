import TodoItems from "./TodoItems.tsx";
import {useTodos} from "../hooks/useTodos.tsx";



const TodoList = () => {

    const {todos} = useTodos();

    return (
        <ul>
            {todos.map(e => (
                <TodoItems todos={e}/>
            ))}
        </ul>
    )

}

export default TodoList;