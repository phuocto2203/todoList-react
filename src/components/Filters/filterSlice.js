// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         priority: [...action.payload],
//       };

//     default:
//       return state;
//   }
// };

// export default filterReducer;

import {createSlice} from "@reduxjs/toolkit"


const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //mutation
      state.search = action.payload
    }, /// => {type: 'filters/searchFilterChange'}
    statusFilterChange: (state, action) => {
      state.status = action.payload

    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload
    }

  }
})

const {actions, reducer} = filterSlice;
export const {searchFilterChange, statusFilterChange, priorityFilterChange} = actions;
export default reducer;

