import * as types from './types';
import { getCart, addItemP, subItem, removeItemP } from '../services/cartPersist';
import swal from 'sweetalert';

if (typeof window !== 'undefined') {
    // Perform localStorage action
    var cart = getCart()
}
export const cart_open_close = () => ({ type: types.CART_OPEN_CLOSE })
export const open_close_Favoritos = () => ({ type: types.OPEN_CLOSE_FAVORITOS })
export const setOrderState = () => ({ type: types.SET_ORDER_STATE })

export const setLogin = (user) =>{
    return async function (dispatch) {
        try {
            const favoritos = await fetch(`/api/users/getfavorites?UserId=${user.id}`).then(r => r.json())
                .then(r => r)                        
            return dispatch({ type: types.SET_LOGIN, payload:  {
                User: user,
                favorRedux: favoritos
            } })
        } catch (error) {
            console.log(error.message)
        }
    }
}


       
    

export const addItem = (id) => {

    return async function (dispatch) {
        try {
            const product = await fetchedProduct(id);
            product.stockLocal = product.stock
            if (product.stock > 1) {
                // if(product.stockLocal < product.stock){
                //   product.stockLocal - 1;
                // }
                let proLocal = { ...product }
                addItemP(proLocal)
                return dispatch({ type: types.ADD_ITEM, payload: proLocal })
            } else {
                return swal("Oops!", "Producto sin Stock!", "error");
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const removeItem = (id) => {
    removeItemP(id)
    return ({ type: types.REMOVE_ITEM, payload: id })
}
export const moreItems = (id) => {
    addItemP({ id: id, quantity: 1 })
    return ({ type: types.MORE_ITEM, payload: id })
}
export const minusItem = (id) => {
    subItem({ id: id, quantity: 1})
    return ({ type: types.MINUS_ITEM, payload: id })
}
export const setCart = (cart) => {
    return ({ type: types.SET_CART, payload: cart })
}
const fetchedProduct = (id) => fetch(`/api/producto/${id}`).then(r => r.json()).then(d => {
    return {
        id: d.id,
        name: d.name,
        href: `/product/${id}`,
        price: d.price,
        quantity: 1,
        imageSrc: d.image,
        imageAlt: d.name,
        stock: d.stock,
    }
})