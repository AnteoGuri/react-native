import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import addCartReducer from './slices/addCartSlice';
import {ThunkMiddleware} from '@reduxjs/toolkit';
import checkOutReducer from './slices/checkOutSlice';
import nameReducer from './slices/nameSlice';

let middleware = applyMiddleware(ThunkMiddleware)(configureStore);

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: addCartReducer,
    checkout: checkOutReducer,
    name: nameReducer,
  },
});
