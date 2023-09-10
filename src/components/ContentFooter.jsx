import { useDispatch, useSelector } from "react-redux"
import { changeFilter, clearCompleted, selectTodos } from "../redux/todos/todosSlice"

const ContentFooter = () => {
    const dispatch = useDispatch()

    const todos = useSelector(selectTodos)
    const activeFilter = useSelector(state => state.todos.activeFilter)

    const itemsLeft = todos.filter(todo => todo.completed === false).length

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft} </strong>
                {itemsLeft === 1 ? "item left" : "items left"}
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" onClick={() => dispatch(changeFilter("all"))} className={activeFilter === "all" ? "selected" : null}>All</a>
                </li>
                <li>
                    <a href="#/" onClick={() => dispatch(changeFilter("active"))} className={activeFilter === "active" ? "selected" : null}>Active</a>
                </li>
                <li>
                    <a href="#/" onClick={() => dispatch(changeFilter("completed"))} className={activeFilter === "completed" ? "selected" : null}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter