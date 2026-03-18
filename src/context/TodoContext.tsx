import {useState, useRef, useEffect, createContext} from 'react';
import type {Form} from "../types/Form.ts";

interface TodoContextType {
    todos: Form[],
    addTodo: (text: string) => void;
    deleteTodo: (id:number) => void;
    toggleTodo: (id:number) => void;
}

interface Props {
    children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children} : Props) => {

    const [todos, setTodos] = useState<Form[]>([]);
    let lastId = useRef(1);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data.todos))
    }, [])


    const addTodo = (text: string) => {
        setTodos([{id: lastId.current, todo:text , completed:false, date: Date.now()}, ...todos])
        lastId.current++
    }

    const deleteTodo = (id: number) => {
        const deleted = todos.filter((e) => e.id !== id);
        setTodos(deleted)
    }


    const toggleTodo = (id: number) => {
        const toggle = todos.map(e => e.id === id ? {...e, completed: !e.completed} : e);
        setTodos(toggle);
    }


    const value = {
        todos,
        addTodo ,
        deleteTodo ,
        toggleTodo,
    }

    return <TodoContext.Provider value={value} >{children}</TodoContext.Provider>

}