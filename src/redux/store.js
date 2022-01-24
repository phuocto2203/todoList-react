// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";


// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;


import {configureStore} from '@reduxjs/toolkit'
import filterReducer from '../components/Filters/filterSlice'
import todosReducer from '../components/TodoList/todosSlice'

const store = configureStore({
    reducer: {
        filters: filterReducer,
        todoList: todosReducer,
    }
})

export default store;