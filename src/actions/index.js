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