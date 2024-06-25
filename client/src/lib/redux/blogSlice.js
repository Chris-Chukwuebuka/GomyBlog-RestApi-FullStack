import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the user
const initialState = {
  blog: null,
  isLoading: false,
  error: null,
  errorMessage: "",
};
export const blogSlice = createSlice({
  initialState,
  name: "userState",
  reducers: {
    // Define the action to set the user
    getCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export the action
export default blogSlice.reducer;

// Export the action get a single blog
export const { getSingleBlog } = blogSlice.actions;
