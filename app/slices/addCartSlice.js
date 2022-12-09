import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
export const addCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart(state, action) {
      const index = state.value.indexOf(action.payload);
      if (index <= -1) {
        state.value.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const index = state.value.indexOf(action.payload);
      console.log(index);
      console.log(state.value.splice(index, 1));
      if (index > -1) {
        // state.value=state.value.splice(index,1)
        state.value = state.value.filter(arrow => arrow.id !== action.payload);
      }
      console.log(state.value);
    },
  },
});

export const {addToCart, removeFromCart} = addCartSlice.actions;

export default addCartSlice.reducer;
