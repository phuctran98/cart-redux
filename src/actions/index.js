import * as types from "../constants/ActionType";
import * as messages from "../constants/Message";


export const addToCart = (product,quantity) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage = (message) =>{
    return {
        type : messages.MSG_ADD_CART_SUCCSESS,
        message
    }
}
export const deleteCartItem = (product) =>{
    return {
        type : types.DELETE_TO_CART,
        product
    }
}
export const updateQuantityCartItem = (product,quantity) =>{
    return {
        type : types.UPDATE_QUANTITY_CART_ITEM,
        product,
        quantity
    }
}