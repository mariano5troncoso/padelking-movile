import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducers'; // Asegúrate de importar tus reducers aquí

// Combina tus reducers si tienes más de uno
const rootReducer = combineReducers({
  cart: cartReducer,
  // Agrega otros reducers aquí si es necesario
});

const store = createStore(rootReducer);

export default store;