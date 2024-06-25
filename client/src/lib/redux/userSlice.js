import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the user
const initialState = {
  user: null,
};
export const userSlice = createSlice({
  initialState,
  name: "userState",
  reducers: {
    // Define the action to set the user
    getCurrentUser:(state,action) =>{
        state.user = action.payload;
    }
  },
});

// Export the action	
export default userSlice.reducer;

// Export the action creator
export const { getCurrentUser } = userSlice.actions;
