import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boxSlice from 'app/store/slices/boxSlice';

export const store = configureStore({
  reducer: {
    boxSlice: boxSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
