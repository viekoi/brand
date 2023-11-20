import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../common/modal";

export interface cartItemsSlice {
  items: (IProduct & { amount: number })[];
  totalCartPrice: number;
  totalCartItems: number;
}

const cartItems: cartItemsSlice =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : { items: [], totalCartPrice: 0, totalCartItems: 0 };

const initialState: cartItemsSlice = {
  items: cartItems.items,
  totalCartPrice: cartItems.totalCartPrice,
  totalCartItems: cartItems.totalCartItems,
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<IProduct & { amount: number }>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      console.log(existingCartItemIndex);

      const updatedtotalCartPrice =
        state.totalCartPrice + action.payload.price * action.payload.amount;
      const updatedtotalCartItems =
        state.totalCartItems + action.payload.amount;

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      console.log(updatedItems);
      state.totalCartPrice = updatedtotalCartPrice;
      state.items = updatedItems;
      state.totalCartItems = updatedtotalCartItems;

      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          items: updatedItems,
          totalCartPrice: updatedtotalCartPrice,
          totalCartItems: updatedtotalCartItems,
        }),
      );
    },
    removeItems: (
      state,
      action: PayloadAction<IProduct & { amount: number }>,
    ) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      const updatedtotalCartPrice =
        state.totalCartPrice - action.payload.price * action.payload.amount;

      const updatedtotalCartItems =
        state.totalCartItems - action.payload.amount;

      const removingItem = state.items[existingCartItemIndex];
      let updatedItems;

      const updatedItem = {
        ...removingItem,
        amount: removingItem.amount - action.payload.amount,
      };
      if (updatedItem.amount === 0) {
        updatedItems = [...state.items].filter(
          (item) => item.id !== removingItem.id,
        );
      } else {
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          items: updatedItems,
          totalCartPrice: updatedtotalCartPrice,
          totalCartItems: updatedtotalCartItems,
        }),
      );

      (state.items = updatedItems),
        (state.totalCartPrice = updatedtotalCartPrice);
      state.totalCartItems = updatedtotalCartItems;
    },
    resetCart: (state) => {
      localStorage.removeItem("cartItems");
      (state.items = []), (state.totalCartItems = 0);
      state.totalCartPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItems, removeItems, resetCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
