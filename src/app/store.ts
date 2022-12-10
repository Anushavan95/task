import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import catSliceReducer from "../features/counter/apiImageSlice";

export const store = configureStore({
  reducer: {
    cats: catSliceReducer,
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
