import { configureStore } from "@reduxjs/toolkit";
import authModalSlice from "./slices/authModalSlice";
import cartItemsSlice from "./slices/cartItemsSlice";

export const store = configureStore({
  reducer: {
    authModal: authModalSlice,
    cartItems: cartItemsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
