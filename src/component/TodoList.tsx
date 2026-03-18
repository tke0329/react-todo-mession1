import TodoItems from "./TodoItems.tsx";
import {useTodos} from "../hooks/useTodos.tsx";

interface filterType {
    filter: "all" | "active" | "completed"
}

const TodoList = ({filter}: filterType) => {

    const {todos} = useTodos();

    const filteredTodos = todos.filter((todo) => {
        if(filter === "active") return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true;
    })

    return (
        <ul>
            {filteredTodos.map(e => (
                <TodoItems todos={e}/>
            ))}
        </ul>
    )

}

export default TodoList;
