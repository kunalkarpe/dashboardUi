import {createSlice} from "@reduxjs/toolkit";
import data from "../Components/Data"; 
const initialState = {
  list: data,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list=[action.payload,...state.list] ;
    },
  }
}); 
export const {addToList} = listSlice.actions;

export default listSlice.reducer;
