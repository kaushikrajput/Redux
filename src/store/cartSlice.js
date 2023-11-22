const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
  status: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    remove(state, action) {
      const updateCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = updateCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAll(state, action) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity >= 1) {
        state.cart[itemIndex].quantity += 1;
      }
    },
    reduceProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const updateCart = state.cart.filter((p) => p.id !== action.payload.id);
        state.cart = updateCart;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { add, remove, removeAll, incrementProduct, reduceProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
