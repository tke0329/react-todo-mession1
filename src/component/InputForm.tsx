import {useState} from 'react';
import {useTodos} from "../hooks/useTodos.tsx";

const InputForm = () => {

    const { addTodo } = useTodos();

    const [input, setInput] = useState("");


    const handleOnSubmit = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!input.trim()) return;
        addTodo(input)
        setInput("");
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="해야 할 일을 입력해!"
                />
                <button type="submit">입력</button>
            </form>
        </>
    )

}

export default InputForm;