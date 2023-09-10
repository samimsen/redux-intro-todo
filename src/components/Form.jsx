import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todos/todosSlice"
import { useState } from "react"

const Form = () => {

    const dispatch = useDispatch()
    const [todoInput, setTodoInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoInput.trim().length === 0) {
            return
        }
        dispatch(addTodo(todoInput))
        setTodoInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={(e) => setTodoInput(e.target.value)}
                value={todoInput}
            />
        </form>
    )
}

export default Form