import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [
            {
                id: "1",
                todo: "learn react",
                completed: false
            },
            {
                id: "2",
                todo: "run",
                completed: false
            },
        ],
        activeFilter: "all"
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: (todoInput) => {
                return {
                    payload: {
                        id: nanoid(),
                        todo: todoInput,
                        completed: false
                    }
                }
            }
        },
        toggle: (state, action) => {
            const id = action.payload
            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            const item = state.items.find(item => item.id === id)
            state.items = state.items.filter(filteredItem => filteredItem.id !== item.id)
        },
        changeFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state) => {
            state.items = state.items.filter(item => item.completed === false)
        }
    }
})

export const selectTodos = (state) => state.todos.items

export const selectFilteredTodos = state => {
    if (state.todos.activeFilter === "all") {
        return state.todos.items
    }

    return state.todos.items.filter((todo) => (
        state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true
    ))
}

export default todosSlice.reducer
export const { addTodo, toggle, deleteTodo, changeFilter, clearCompleted } = todosSlice.actions