// import { v4 as uuidv4 } from "uuid";
// const initState = [
//   { id: uuidv4(), name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: uuidv4(), name: "Learn Redux", completed: true, priority: "High" },
//   { id: uuidv4(), name: "Learn JavaScript", completed: false, priority: "Low" },
// ];
// const todosListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todosListReducer;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todosSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: uuidv4(), name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: uuidv4(), name: "Learn Redux", completed: true, priority: "High" },
    {
      id: uuidv4(),
      name: "Learn JavaScript",
      completed: false,
      priority: "Low",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.filter((todo) => todo.id === action.payload);
      currentTodo.map((todo) => (todo.completed = !todo.completed));
    },
  },
});

const {actions, reducer} = todosSlice;
export const {addTodo, toggleTodoStatus} = actions;
export default reducer;
