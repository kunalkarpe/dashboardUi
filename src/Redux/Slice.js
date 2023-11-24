import {createSlice} from "@reduxjs/toolkit";
// import data from "../Components/Data"; 
const initialState = {
  list: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list =  action.payload    ;
    },
  }
}); 
export const {addToList} = listSlice.actions;

export default listSlice.reducer;
