const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item._id === newItem._id);

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        newItem.quantity = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case 'REMOVE_FROM_CART':
      const productIdToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(item => item._id !== productIdToRemove);
      
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;

