import { createSelector } from "@reduxjs/toolkit";

// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
//   });
//   return todosRemaining;

// };

// { id: uuidv4(), name: "Learn JavaScript", completed: false, priority: "Low" },

export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const searchTextSelector = (state) => state.filters.search;
export const prioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  prioritySelector,
  (todoList, status, searchText, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText.toLowerCase());
      }

      return priority.length
        ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (status === "Completed" ? todo.completed : !todo.completed) &&
            priority.includes(todo.priority)
        : todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (status === "Completed" ? todo.completed : !todo.completed);
    });
  }
);
