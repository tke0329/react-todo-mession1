import TodoList from "../component/TodoList.tsx";

const List = () => {

    return (
        <>
            <h2>목록</h2>
            <TodoList filter="all" />
        </>
    )

}

export default List;
