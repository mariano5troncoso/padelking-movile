const initialState = {
    cartItems: [], // Un array para almacenar los productos en el carrito
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Agregar un producto al carrito
        const newItem = action.payload;
        const existingItem = state.cartItems.find(item => item._id === newItem._id);
  
        if (existingItem) {
          // Si el producto ya existe en el carrito, actualiza la cantidad
          existingItem.quantity += 1;
          return {
            ...state,
            cartItems: [...state.cartItems],
          };
        } else {
          // Si el producto no existe en el carrito, agrégalo
          newItem.quantity = 1;
          return {
            ...state,
            cartItems: [...state.cartItems, newItem],
          };
        }
  
      case 'REMOVE_FROM_CART':
        // Eliminar un producto del carrito
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
  