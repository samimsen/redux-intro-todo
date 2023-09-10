import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, toggle, selectFilteredTodos } from "../redux/todos/todosSlice"

const TodoList = () => {

    const dispatch = useDispatch()

    const filteredTodos = useSelector(selectFilteredTodos)

    return (
        <ul className="todo-list">
            {filteredTodos.map((item) =>
            (
                <li key={item.id} className={item.completed ? "completed" : ""} >
                    <div className="view">
                        <input className="toggle" type="checkbox" checked={item.completed} onChange={() => dispatch(toggle(item.id))} />
                        <label>{item.todo}</label>
                        <button className="destroy" onClick={() => dispatch(deleteTodo(item.id))}></button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList