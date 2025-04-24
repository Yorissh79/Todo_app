import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos : [
        {
            id: "1", text: "Test", status: "incomplete"
        },

        {
            id: "2", text: "Test", status: "incomplete"
        },

        {
            id: "3", text: "Test", status: "incomplete"
        }
    ]
}

export const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const newTodo = action.payload
            state.todos.push(newTodo)
        },

        editTodo: (state, action) => {
            const {id, text} = action.payload
            const existData = state.todos.find((item) => item.id === id)

            if (existData) {
                existData.text = text
            }
        }
    }
})

export const { addTodo, editTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer

export default todoSlice.reducer