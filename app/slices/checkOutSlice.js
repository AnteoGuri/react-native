import {createSlice} from '@reduxjs/toolkit';

export const checkOutSlice = createSlice({
  name: 'checkout',
  initialState: {
    history: [],
  },
  reducers: {
    checkout(state, action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.history.push(action.payload);
      console.log(state.history.toString);
    },
  },
});

export const {checkout} = checkOutSlice.actions;

export default checkOutSlice.reducer;
