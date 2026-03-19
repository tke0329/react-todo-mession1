import {useContext} from 'react'
import {TodoContext} from '../context/TodoContext';


export const useTodos = () => {

    const context = useContext(TodoContext);

    if(!context) {
        throw new Error("Context 에러");
    }

    return context;

}
