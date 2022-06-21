import { combineReducers } from 'redux'
import {CART_OPEN_CLOSE, ADD_ITEM, REMOVE_ITEM, MORE_ITEM, MINUS_ITEM, OPEN_CLOSE_FAVORITOS, FAVORITOS, SET_LOGIN}  from './types'
import {getCart} from '../services/cartPersist'


///Reducer Carrito
if (typeof window !== 'undefined') {
  // Perform localStorage action
  var cart = getCart()
}
//const cart = getCart()
const initialStateCart = {  
  User: {},
  products: cart || [],  
  cart_open_close: false,
  open_close_Favoritos: false,
  isFavorite: false,
  favorRedux: []
}
const cartReducer = (state = initialStateCart, { type, payload }) => {
  switch (type) {
    case SET_LOGIN: {
      return {...state, 
        User: payload.User,
        favorRedux: payload.favorRedux,
        open_close_Favoritos: false
      }
    }
    case OPEN_CLOSE_FAVORITOS: {
      return {...state, 
        open_close_Favoritos: !state.open_close_Favoritos
    }}
    case CART_OPEN_CLOSE:
      
      {return {
        ...state,
        cart_open_close: !state.cart_open_close
      }}
    case ADD_ITEM:
      {return {
        ...state,
        cart_open_close: true,
        open_close_Favoritos: false,
        products: [...state.products, payload]
      }
      }
    case REMOVE_ITEM:
      {return {
        ...state,
        products: state.products.filter(i => i.id !== payload)
      }}
    case MORE_ITEM:
      {
        const prd = state.products.find(i => i.id === payload)
        prd.quantity += 1 
        prd.stockLocal -= 1
        
        return { ...state,
          cart_open_close: true,
          open_close_Favoritos: false,
        }}
    case MINUS_ITEM:
      {
        const prd = state.products.find(i => i.id === payload)
        prd.quantity -= 1 
        prd.stockLocal += 1
        return { ...state}
      }

    default:
      return state
  }
}


//Reducer Productos:


// COMBINED REDUCERS
const reducers = {    
  cart: cartReducer

}



export default combineReducers(reducers)