import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginSlice';
import userSlice from './reducers/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
